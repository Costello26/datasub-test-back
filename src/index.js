import express from "express";
import mongoose from "mongoose";
import config from "./config/index.js";
import cardRoutes from "./Card/card.routes.js";
import errorHandler from "./util/errorHandler.js";

class App {
    main() {
        const app = express();
        app.use(express.json());


        app.use('/api/cards/', cardRoutes);
        app.use(errorHandler);
        app.use('/', (req, res) => res.sendStatus(200));

        app.listen(config.port, async() => {
            console.log(`Server started at port ${config.port}`);
            await mongoose.connect(config.db_uri)
                .then(() => console.log('Connected to DB'))
                .catch(() => console.log('DB connection error'));
            
        })
    }
}

const server = new App();

server.main();