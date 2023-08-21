
import mongoose from 'mongoose';

const posttSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    }, 
    content: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },

})

const Postt = mongoose.model("Postt", posttSchema);

export default Postt;