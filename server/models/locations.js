import mongoose from "mongoose"
const Schema = mongoose.Schema;

const locationSchema = new Schema({
    user_id: {
        type: Schema.Types.ObjectId, 
        ref: 'users',
        required: true,
        unique: true,
    },
    location: {
        type: String,
        default: null,
    },
});

const locations = mongoose.model("locations", locationSchema);
export default locations;