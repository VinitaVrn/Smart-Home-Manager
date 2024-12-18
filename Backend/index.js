import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose"
dotenv.config();
import { userRouter } from "./routes/user.route.js";
import cors from "cors"
const app=express();

app.use(cors())
app.use(express.json())

app.use("/user",userRouter)

const mongodb=process.env.MONGODB_URL

app.listen(4000,async()=>{
  await mongoose.connect(mongodb);
  console.log("Database connected");
  console.log("server started at http://localhost:4000")
})