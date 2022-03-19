const validator = (req, res) => {
    const err = [];
    const expDateReqex = /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/;
    const { cardNumber, expDate, cvv } = req.body;
    if(cardNumber.length != 16) err.push('Invalid card number');
    if(cvv.length != 3) err.push('Invalid cvv');
    if(!expDateReqex.test(expDate)) err.push('Invalid expiration date');
    if(err.length >= 1) {
        res.status(400).json({message: "Validation error", errors: err});
        return false
    }
    return true;
}

export default validator;