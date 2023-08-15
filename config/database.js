import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();
export const connectDB = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true

    }).then(console.log("db connected successfully")).catch((error) => {
        console.log("db connection error")
        console.log(error)
        process.exit(1)
    })
}