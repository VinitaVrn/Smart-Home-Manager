import { user } from "../models/user.model.js"; 

export const validatedata=async (req,res,next)=>{
    const {username,roomname}=req.body;
    res.locals.username=username;
    res.locals.roomname=roomname;
    if(!username||!roomname){
        return res.status(400).json({msg:"Bad request"})
    }
    const validuser= await user.findOne({username})
    
    if(!validuser){
        return res.status(400).json({msg:"Bad request"})
    }
    next();
}
