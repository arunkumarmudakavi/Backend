//require('dotenv').config({path: './env'}) to maintain consistancy we write like below code
import dotenv from "dotenv"
import connectDB from "./db/index.js"
import { app } from "./app.js"

dotenv.config({
    path: "./.env"
})

// package.json = -r dotenv/config --experimental-json-modules
// 1. directly loading environment variable.
// 2. -r is a flag
// 3. It is an experimental feature.


connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO DB connection failed!!!", err);
})





/* First Approach
import express from "express"
const app = express();

( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("Error: ", error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        })
    } catch (error) {
        console.error("Error: ", error)
        throw err
    }
})()
*/