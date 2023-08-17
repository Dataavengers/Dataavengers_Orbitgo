import mongoose from "mongoose"
const Schema = mongoose.Schema;

const planetSchema = new Schema({
    name: {
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
        unique: true
    },
});

const planets = mongoose.model("planets", planetSchema);
export default planets;