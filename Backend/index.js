import express from "express";
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose"
import { userRouter } from "./routes/user.route.js";
import cors from "cors"
import { roomNdeviceRouter } from "./routes/roomNdevice.route.js";
import { routineRoute } from "./routes/routine.route.js";
const app=express();

app.use(cors())
app.use(express.json())

app.use("/user",userRouter)
app.use("/roomNdevice",roomNdeviceRouter)
app.use("/routine",routineRoute)

const mongodb= "mongodb://127.0.0.1:27017/SHM"

app.listen(4000,async()=>{
  await mongoose.connect(mongodb);
  console.log("Database connected");
  console.log("server started at http://localhost:4000")
})