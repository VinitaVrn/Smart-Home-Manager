import  routine  from "../models/routines.model.js";
import { user } from "../models/user.model.js";
const createroutine= async(req,res)=>{
  const {username,routine,time}=req.body;
  if(!username||!routine||!time){
     res.status(400).json({msg:"Bad request"})
  }
  const newroutine={
   username,
   routine,
   time,
  }
  try{
    await routine.create(newroutine);
    res.status(200).json({msg:"Routine Created",
        routine:newroutine
    })
  }catch(err){
    res.status(500).json({msg:"Internal server error",
        error:err.message
    })
  }
  
}
export {createroutine}