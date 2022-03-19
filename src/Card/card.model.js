import mongoose from "mongoose";


const cardSchema = new mongoose.Schema({
    cardNumber: {
        type: Number,
        required: true,
    },
    expDate: {
        type: String,
        required: true
    },
    cvv: {
        type: Number,
        required: true
    },
    amount: {
        type: String,
        required: true
    }
})

const Card = mongoose.model('Card', cardSchema);

export default Card;