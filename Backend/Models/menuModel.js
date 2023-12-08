const mongoose = require("mongoose");

const menuSchema = mongoose.Schema(
    {
        name: String,
        description: String,
        image: String,
        city: String,
        price: Number,
        rating: Number,
        start_date: String,
        end_date: String,
        location: String,
        category: {
            type: String,
            enum: ["MENU", "DINING", "DEALS", "SPECIALS", "EVENTS"],
        },
    },
    {
        versionKey: false,
    }
);

const menuModel = mongoose.model("menu", menuSchema);

module.exports = {
    menuModel,
};
