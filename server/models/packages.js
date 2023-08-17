import mongoose from "mongoose"
const Schema = mongoose.Schema;

const packageSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        required: true,
    },
    rate: {
        type: String,
        required: true,
        default: 0,
    },
    image: {
        type: String,
        required: true,
        unique: true,
    },
});

const packages = mongoose.model("packages", packageSchema);
export default packages;