const mongoose = require("mongoose");
const { menuModel } = require("./menuModel");

const cartSchema = mongoose.Schema({
    items: [{
        menu: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "menu",
        },
        userName: String,
    }],
}, {
    versionKey: false
});

const cartModel = mongoose.model("cart", cartSchema);

module.exports = {
    cartModel
};
