import { user } from "../models/user.model.js";
import argon2 from "argon2";

const register=async (req, res)=>{
    const {username,email,password}=req.body;
    if(!username||!password){
        return res.status(400).json({msg:"Bad request"})
    }
    const hashedpassword=await argon2.hash(password);

    const newuser={
        username,
        email,
        password:hashedpassword,
    }
    
    try{
      await user.create(newuser)
      res.status(201).json({msg:"Account created successfully"})
    }catch(err){
      res.status(500).json({msg:"Internal server error",
        error:err.message
        
      })
    }
}

const login=async(req,res)=>{
    const {username,password}=req.body;
    if(!username ||!password){
        return res.status(400).json({msg:"Bad request"})
    }
    const userdata=await user.findOne({username});
    if(!userdata){
        return res.status(400).json({msg:"wrong username or password"})
    }
    try{
       const iscorrectuser=await argon2.verify(userdata.password,password);
       if(iscorrectuser==true){
        return res.status(200).json({msg:"login successful"})
       }else{
        return res.status(400).json({msg:"wrong username and password"})
       }
      
    }catch(err){
        return res.status(500).json({msg:"Internal server error",
            error:err.message
        })
    }
}

export{register,login}