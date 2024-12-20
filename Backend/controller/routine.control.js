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
  const {username,lastroutine,newroutine,time} = req.body;
  
  if(!username||!lastroutine||!time||!newroutine){
    res.status(400).json({msg:"Bad request"})
  }
 
  const data = await routines.findOne({username:username, routine: lastroutine});
 
  if (!data) {
     return res.status(404).json({msg: 'Record not found'});
  }
 
  data.username = username;
  data.routine = newroutine;
  data.time = time;
 
  await data.save();
 
  res.status(200).json({msg:'udated successfully'})
 
 
 }

 const deleteRoutine = async (req, res) => {
  const { username, routine } = req.body;

  try {
    const result = await routines.deleteOne({ username, routine });

    if (result.deletedCount === 0) {
      return res.status(400).json({ msg: "Check your username and routine" });
    }

    res.status(200).json({ msg: "Routine deleted successfully" });
  } catch (error) {
    res.status(500).json({ msg: "Internal server error", error: error.message });
  }
};

const getroutine= async(req,res)=>{
  const {username}=req.body;
  if(!username){
    return res.status(400).json({msg:"Bad request"})
 }
try{
    const data= await routines.find({username})
    return res.status(200).json({msg:"data sent success",routines:data})
}catch(err){
    res.status(500).json({msg:"Internal server error",
        error:err.message
    })
 }
}

export {createroutine,updateRoutine,deleteRoutine,getroutine}