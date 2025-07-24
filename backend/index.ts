import express from 'express';
import cors from 'cors';
import userRoute from './src/routes/user.routes';
import connectDB from './src/config/db';
import dotenv from "dotenv"

const app = express();
const PORT = process.env.PORT || 3000;
dotenv.config()
app.use(cors());
app.use(express.json());
const MONGODB_URI = process.env.MONGODB_URI || "add you own"
connectDB(MONGODB_URI)
app.use("/user", userRoute)

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});