import {model,Schema} from "mongoose";

const routineSchema= new Schema({
    username:{
      type:String,
      required:true
    },
    routine:{
        type:String,
        required:true
    },
    time:{
        type:String,
        required:true
    }
},
{timestamps:true}
)

export const routine= model("routine",routineSchema);
