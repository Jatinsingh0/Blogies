import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: { // Fixed typo: "passward" to "password"
        type: String,
        required: true,
    },

}, { timestamps: true });

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;