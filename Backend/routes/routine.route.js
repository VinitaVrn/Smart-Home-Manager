import {Router} from "express";
import { createroutine ,updateRoutine,deleteRoutine} from "../controller/routine.control.js";

const routineRoute=Router();

routineRoute.post("/create",createroutine)
routineRoute.post('/update',updateRoutine)
routineRoute.delete('/delete',deleteRoutine)


export {routineRoute}