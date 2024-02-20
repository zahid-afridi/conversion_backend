import Messages from "../Models/Messages.js";

const Newmessage = async (req, res) => {
    try {
        const newMessage = new Messages(req.body);
        const saveMessage = await newMessage.save();
        res.status(200).json(saveMessage);
    } catch (error) {
        res.status(500).json({ message: 'internal server error' });
    }
};



const getmessage = async (req, res) => {
    try {
        // first method
        // const conversationId = req.params.conversionId;
        // const messages = await Messages.find({ conversationId });
        // secondmessthod

         const conversationId = req.params.conversionId;
        const messages = await Messages.find({ conversationId:conversationId });
        res.status(200).json(messages);
    } catch (error) {
        res.status(500).json({ message: 'internal server error' });
    }
};




export { Newmessage, getmessage };
