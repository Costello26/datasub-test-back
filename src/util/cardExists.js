import Card from "../Card/card.model.js"

const cardExists = async(cardNumber) => {
    const result = await Card.exists({cardNumber: cardNumber});
    return result;
}

export default cardExists;