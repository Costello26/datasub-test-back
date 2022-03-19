// eslint-disable-next-line no-unused-vars
const errorHandler = (err, req, res, next) => {
    console.log(err);
    res.sendStatus(500).json("Internal server error");
}

export default errorHandler;