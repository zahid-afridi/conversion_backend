import mongoose from "mongoose";

const conversionSchema=new mongoose.Schema({
    memmbers:{
        type:Array
    }
},{
    timestamps:true
})

export default mongoose.model ('Conversation',conversionSchema)