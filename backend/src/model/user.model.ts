import mongoose, { Document, Schema } from "mongoose";

interface IUser extends Document {
    username: string;
    email: string;
    password: string;
    countryCode: string;
    phoneNumber: number;
    address: string;
    gender: string;
    profileImage: string;
    verified: boolean;
    role: 'user' | 'admin' | 'vendor';
}
const userSchema: Schema<IUser> = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username is required!"]
    },
    email: {
        type: String,
        required: [true, "email is required!"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "password is required!"],
    },
    countryCode: {
        type: String,
        required: [true, "country code is required!"],
    },
    phoneNumber: {
        type: Number,
        required: [true, "phone number is required!"],
    },
    address: {
        type: String,
        required: [true, "address is required!"],
    },
    gender: {
        type: String,
        required: [true, "gender is required!"],
    },
    profileImage: {
        type: String,
        required: [true, "profile image url is required!"],
    },
    verified: {
        type: Boolean,
        default: true
    },
    role: {
        type: String,
        default: 'user',
        enum: ['user', "admin", "vendor"]
    }
})

const userModel = mongoose.model<IUser>("User", userSchema)

export default userModel