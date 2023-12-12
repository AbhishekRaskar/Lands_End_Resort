const express = require("express");
const { auth } = require("../Middlewares/authMiddlewares");
const { menuModel } = require("../Models/menuModel");
const { cartModel } = require("../Models/cartModel");

const cartRouter = express.Router();

cartRouter.use(auth);

// Get the user's cart
cartRouter.get("/", async (req, res) => {
    try {
        const userID = req.user.userID;
        const cart = await cartModel
            .findOne({ "items.userName": req.user.userName })
            .populate("items.menu");
        res.json({ msg: "User's Cart", cart });
    } catch (error) {
        res.json({ error: error.message });
    }
});

// Add a menu item to the cart
cartRouter.post("/add-to-cart/:menuID", async (req, res) => {
    // Extract the menuID from the request parameters
    const { menuID } = req.params;

    try {
        // Find the menu item in the menuModel by its ID
        const menu = await menuModel.findById(menuID);

        // Check if the menu item exists
        if (menu === null) {
            // If not found, respond with a message
            res.json({ msg: "Menu Item not found" });
        } else {
            // Define a filter to find the user's cart by userName
            const cartFilter = { "items.userName": req.user.userName };

            // Find the user's cart in the cartModel
            const cart = await cartModel.findOne(cartFilter);

            // Check if the user has an existing cart
            if (cart === null) {
                // If the user doesn't have a cart, create a new one
                const newCart = new cartModel({
                    items: [{ menu: menu._id, userName: req.user.userName }],
                });
                // Set the userID for the new cart
                newCart.userID = req.user.userID;
                // Save the new cart to the database
                await newCart.save();
                // Respond with a success message and the new cart
                res.json({
                    msg: `${menu.name} has been added to the cart`,
                    cart: newCart,
                });
            } else {
                // If the user has an existing cart, update it
                const cartUpdate = {
                    $push: { items: { menu: menu._id, userName: req.user.userName } },
                };
                // Set options to get the updated cart
                const options = { new: true };
                // Find and update the existing cart
                const updatedCart = await cartModel.findOneAndUpdate(
                    cartFilter,
                    cartUpdate,
                    options
                );

                // Log the updated cart to the console
                console.log("Updated Cart:", updatedCart);

                // Check if the cart was successfully updated
                if (updatedCart === null) {
                    // If not updated, log a message and respond with an error
                    console.log("Cart not updated");
                    res.json({ msg: "Cart not updated" });
                } else {
                    // If updated, respond with a success message and the updated cart
                    res.json({
                        msg: `${menu.name} has been added to the cart`,
                        cart: updatedCart,
                    });
                }
            }
        }
    } catch (error) {
        // If an error occurs, log the error and respond with an error message
        console.error("Error:", error);
        res.json({ error: error.message });
    }
});

// Remove a menu item from the cart
cartRouter.delete("/remove-from-cart/:menuID", async (req, res) => {
    // Extract the menuID from the request parameters
    const { menuID } = req.params;

    try {
        // Find and update the user's cart to remove the specified menu item
        const cart = await cartModel.findOneAndUpdate(
            { "items.userName": req.user.userName, "items.menu": menuID },
            { $pull: { items: { menu: menuID } } },
            { new: true }
        );

        // Check if the cart was successfully updated
        if (cart) {
            // If updated, respond with a success message and the updated cart
            res.json({ msg: `Menu item has been removed from the cart`, cart });
        } else {
            // If not updated, respond with a message indicating the menu item was not found
            res.json({ msg: "Menu Item not found in the cart" });
        }
    } catch (error) {
        // If an error occurs, respond with an error message
        res.json({ error: error.message });
    }
});


// Check if a menu item is already in the cart
cartRouter.get("/check/:menuID", async (req, res) => {
    const { menuID } = req.params;

    try {
        const isItemInCart = await cartModel.exists({
            "items.userName": req.user.userName,
            "items.menu": menuID,
        });

        if (isItemInCart) {
            res.json({ isInCart: true, msg: "Menu item is already in the cart." });
        } else {
            res.json({ isInCart: false, msg: "Menu item is not in the cart." });
        }
    } catch (error) {
        res.status(500).json({ error: "Internal server error. Unable to check cart." });
    }
});

module.exports = {
    cartRouter,
};
