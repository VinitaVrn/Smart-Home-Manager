import  {routines} from "../models/routines.model.js";
import { user } from "../models/user.model.js";
const createroutine= async(req,res)=>{
  const {username,routine,time}=req.body;
  if(!username||!routine||!time){
     res.status(400).json({msg:"Bad request"})
  }
  
  try{
    const newroutine={
      username,
      routine,
      time,
     }
    await routines.create(newroutine)
    res.status(200).json({msg:"Routine Created",
        routine:newroutine
    })
  }catch(err){
    res.status(500).json({msg:"Internal server error",
        error:err.message
    })
  }
  
}

const updateRoutine = async (req,res) => {
  const {username,routine,time} = req.body;
 
  if(!username||!routine||!time){
    res.status(400).json({msg:"Bad request"})
  }
 
  const data = await routine.findOne({username:username, routine: routine});
 
  if (!data) {
     return res.status(404).json({msg: 'Record not found'});
  }
 
  data.username = username;
  data.routine = routine;
  data.time = time;
 
  await data.save();
 
  res.status(200).json({msg:'udated successfully'})
 
 
 }
export {createroutine,updateRoutine}