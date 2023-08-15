import mongoose from "mongoose"
const Schema = mongoose.Schema;

const userSchema = new Schema({
    user_id: String,
    email: String,
    password: String,
    faculty: String,
    phone: String,
    address: String,
    firstname: String,
    lastname: String,
    profile: {
        type: String,
        default: null
    }
});

module.exports = mongoose.model("users", userSchema);