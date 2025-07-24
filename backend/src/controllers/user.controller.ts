import { Request, Response } from "express";
import userModel from "../model/user.model";

const createUser = async (req: Request, res: Response) => {
    try {
        const user = await userModel.create(req.body)
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

export { createUser }