import {Router} from "express";
// import { userSchemaValidation } from "../middlewares/user.middleware.js";
import { register } from "../controller/user.control.js";

const userRouter=Router();

userRouter.post("/signup",register);


export {userRouter}