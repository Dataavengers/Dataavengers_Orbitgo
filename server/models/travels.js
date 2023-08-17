import mongoose from "mongoose"
const Schema = mongoose.Schema;

const travelSchema = new Schema({
    user_id: {
        type: Schema.Types.ObjectId, 
        ref: 'users',
        required: true,
    },
    start_point: {
        type: String,
        required: true,
    },
    end_point: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    package_id: {
        type: Schema.Types.ObjectId, 
        ref: 'packages',
        required: true,
    },
    no_of_travellers: {
        type: String,
        required: true,
    },
    barcode: {
        type: String,
        required: true,
    },
});

const travels = mongoose.model("travels", travelSchema);
export default travels;