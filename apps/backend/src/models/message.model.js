import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    senderId: {
      type: mongoose.Schema.Types.ObjectId, // has to be a user document; object
      ref: "User", // matching with User model at sibling file
      required: true,
    },
    receiverId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    text: {
      type: String,
    },
    image: {
      type: String, // URL in ImageKit
    },
    video: {
      type: String, // URL in ImageKit
    },
  },
  {
    timestamps: true, // createdAt and updatedAt
  },
);

const Message = mongoose.model("Message", messageSchema); /// make Singleton Message object

export default Message;
