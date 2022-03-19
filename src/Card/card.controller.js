import cardExists from "../util/cardExists.js";
import Card from "./card.model.js";
import validator from "./card.validator.js";

export const saveCard = async(req, res, next) => {
    try{
        const { cardNumber, expDate, cvv, amount } = req.body;
        if( !cardNumber, !expDate, !cvv, !amount) return res.status(400).json({error:"Bad request"});
        const validate = validator(req, res);
        if(!validate) return;
        if( await cardExists(cardNumber)) return res.status(409).json({error: "Card already exists"});
        
        const newCard = await Card.create({
            cardNumber,
            expDate,
            cvv,
            amount
        })

        return res.status(201).json({
            requestId: newCard._id,
            amount: newCard.amount
        })

    } catch(err) {
        next(err);
    }
}