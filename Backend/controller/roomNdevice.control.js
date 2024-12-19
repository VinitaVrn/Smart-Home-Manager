import { user,roomNdevice } from "../models/user.model.js";
import dotenv from "dotenv";
dotenv.config();
const createroomNdevice= async (req,res)=>{
    const username=res.locals.username;
    const roomname=res.locals.roomname;
    try{
    const new_roomNdevice={
        username,
        roomname,
        device:devices
    }
    await roomNdevice.create(new_roomNdevice);
    res.status(201).json({msg:"room and device added successfully"});
    }catch(err){
        res.status(500).json({msg:"Internal server error!",
            error:err.message
        })
    }
}
const deleteRoom=async (req,res)=>{
    const username=res.locals.username;
    const roomname=res.locals.roomname;
    try{
        await roomNdevice.deleteOne({$and:[{username:username},{roomname:roomname}]})
        res.status(200).json({msg:"user deleted"})
    }catch(err){
        res.satus(500).json({msg:"Internal server error",
            error:err.message
        })
    }
}
export {createroomNdevice,deleteRoom}