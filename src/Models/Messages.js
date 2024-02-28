import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema({
    conversationId: {
        type: String
    },
    sender: {
        type: String,
    },
    text: {
        type: String,
    }
}, {
    timestamps: true
});
// Create TTL index on createdAt field
MessageSchema.index({ createdAt: 1 }, { expireAfterSeconds: 2400  }); // Expires after 40 minutes (1800 seconds)


export default mongoose.model('Message', MessageSchema);
