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
    res.status(200).json({success:200,converstion})
} catch (error) {
    res.status(500).json(error,message="internal serve error")
    
}
}
const getConversationBetweenUsers = async (req, res) => {
    try {
        const userId1 = req.params.userId1;
        const userId2 = req.params.userId2;

        console.log("User IDs:", userId1, userId2);

        const conversation = await Converstion.findOne({
            $and: [
                { memmbers: userId1 },
                { memmbers: userId2 }
            ]
        });

        console.log("Conversation:", conversation);

        if (conversation) {
            res.status(200).json({ success: true, conversation });
        } else {
            res.status(404).json({ success: false, message: "Conversation not found." });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};



export {AddConverstino,getconversion,getConversationBetweenUsers}