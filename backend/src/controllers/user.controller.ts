import { Request, Response } from "express";
import userModel from "../model/user.model";
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"

const createUser = async (req: Request, res: Response) => {
    try {
        const { email } = req.body
        const userExist = await userModel.findOne({ email })
        if (userExist) {
            return res.status(400).json({
                success: true,
                messsage: "Email already exists!"
            })
        }

        const hashedPassword = await bcryptjs.hash(req.body.password, 12)
        const user = await userModel.create({ ...req.body, password: hashedPassword })
        res.status(201).json({
            success: false,
            message: "User created successfully!",
            data: user
        })
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({
                message: error?.message
            });
        }
    }
}

const loginUser = async (req: Request, res: Response) => {
    try {
        let email = req.body.email
        const userExists = await userModel.findOne({ email })
        if (!userExists) {
            return res.status(400).json({
                success: false,
                message: "User does not exist!"
            })
        }
        const isPassowrdHashed = await bcryptjs.compare(req.body.password, userExists.password)
        if (!isPassowrdHashed) {
            return res.status(400).json({
                success: false,
                message: "Password doesnot match!"
            })
        }
        const token = await jwt.sign({ email, id: userExists._id }, process.env.JWT_SECRET || "")
        res.status(200).json({
            success: true,
            message: "User Logged in",
            token
        })


    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({
                message: error?.message
            });
        }
    }
}

export { createUser, loginUser }