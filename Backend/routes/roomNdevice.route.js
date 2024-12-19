import {Router} from "express";
import { createroomNdevice,deleteRoom } from "../controller/roomNdevice.control.js";
import { validatedata } from "../middlewares/device.middleware.js";
const roomNdeviceRouter=Router();

roomNdeviceRouter.use(validatedata);
roomNdeviceRouter.post("/create",createroomNdevice)
// roomNdeviceRouter.update("/update")
roomNdeviceRouter.delete("/delete",deleteRoom)

export {roomNdeviceRouter}