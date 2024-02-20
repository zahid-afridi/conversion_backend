import Converstion from "../Models/Converstion.js"

const AddConverstino=async(req,res)=>{
const newConverstion = new Converstion({
    memmbers:[req.body.senderId,req.body.receiverId]
})
try {
    const savedConverstion= await newConverstion.save()
    res.status(200).json(savedConverstion)
} catch (error) {
    res.status(500).json({message:"internal server error",error})
    console.log(error)
}
}
const getconversion=async(req,res)=>{
try {
    const userId=req.params.userId
    const converstion=await Converstion.find({
        memmbers:{$in:[userId]}
    })
    res.status(200).json(converstion)
} catch (error) {
    res.status(500).json(error,message="internal serve error")
    
}
}

export {AddConverstino,getconversion}