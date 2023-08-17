import mongoose from "mongoose"
const Schema = mongoose.Schema;

const friendSchema = new Schema({
    user_id: {
        type: Schema.Types.ObjectId, 
        ref: 'users',
        required: true,
        unique: true,
    },
    friends_id: {
        type: String,
        default: null
    },
});

const friends = mongoose.model("friends", friendSchema);
export default friends;