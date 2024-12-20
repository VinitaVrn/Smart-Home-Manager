import {Router} from "express";
import { createroutine } from "../controller/routine.control.js";

const routineRoute=Router();

routineRoute.post("/create",createroutine)

export {routineRoute}