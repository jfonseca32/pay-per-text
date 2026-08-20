import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    clearkId: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    profilePic: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true, // createdAt and updatedAt
  },
);

const User = mongoose.model("User", userSchema); // make Singleton User object

export default User; // interact with users in db
