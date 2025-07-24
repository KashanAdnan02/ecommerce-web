import mongoose from "mongoose";

const connectDB = async (uri: string) => {
    try {
        const connect = await mongoose.connect(uri)
        console.log("mongodb connected")
    } catch (error) {
        console.log("mongodb not connected")
    }
}

export default connectDB