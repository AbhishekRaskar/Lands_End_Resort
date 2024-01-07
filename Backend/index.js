const express = require("express")
const { connection } = require("./Config/db")
require("dotenv").config()
const app = express()
const cors = require("cors");
const { userRouter } = require("./Routes/userRoute");
const { menuRouter } = require("./Routes/menuRoute");
const { cartRouter } = require("./Routes/cartRoute");
const { adminRouter } = require("./Routes/adminRoute");

app.use(cors())

app.use(express.json());

app.use("/users", userRouter)
app.use("/menus", menuRouter)
app.use("/carts", cartRouter)

app.use("/admin", adminRouter);


app.listen(process.env.PORT, async () => {
    try {
        await connection
        console.log(`Server is running on port ${process.env.PORT}`);
        console.log("Connected to Database");

    } catch (error) {
        console.log(error.message);
        console.log("Something Went Wrong....!");
    }
})