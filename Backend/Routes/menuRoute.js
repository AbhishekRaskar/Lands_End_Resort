const express = require("express")
const { menuModel } = require("../Models/menuModel")

const menuRouter = express.Router()

// menuRouter.use(auth)

// To Add new menu
menuRouter.post("/add", async (req, res) => {
    try {
        const menu = new menuModel(req.body)
        await menu.save()
        res.json({ msg: "New Menu Has been added", menu: req.body })
    } catch (error) {
        res.json({ error: error.message })
    }
})


// To Get Menu of particular user
menuRouter.get("/", async (req, res) => {
    try {
        const menu = await menuModel.find()
        res.json({ msg: "Menu List", menu })
    } catch (error) {
        res.json({ error: error.message })
    }
})

// To Update Menu 
menuRouter.patch("/update/:menuID", async (req, res) => {
    const { menuID } = req.params;

    try {

        const menu = await menuModel.findByIdAndUpdate({ _id: menuID }, req.body);

        if (menu) {
            res.json({ msg: `${menu.name} has been updated`, menu });
        } else {
            res.status(404).json({ msg: "Menu not found" });
        }
    } catch (error) {
        console.error("Error updating menu:", error);
        res.status(500).json({ error: error.message });
    }
});



// To Delete
menuRouter.delete("/delete/:menuID", async (req, res) => {
    const { menuID } = req.params;

    try {


        const menu = await menuModel.findByIdAndDelete(menuID);

        if (menu) {
            res.json({ msg: `${menu.name} has been deleted`, menu });
        } else {
            res.status(404).json({ msg: "Menu not found" });
        }
    } catch (error) {
        console.error("Error deleting menu:", error);
        res.status(500).json({ error: error.message });
    }
});


module.exports = {
    menuRouter
}