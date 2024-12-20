import {Router} from "express";
import { createroutine ,updateRoutine} from "../controller/routine.control.js";

const routineRoute=Router();

routineRoute.post("/create",createroutine)
routineRoute.post('/udpate',updateRoutine)

export {routineRoute}