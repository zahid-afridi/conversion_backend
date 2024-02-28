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
// MessageSchema.index({ createdAt: 1 }, { expireAfterSeconds: 15 });

export default mongoose.model('Message', MessageSchema);
