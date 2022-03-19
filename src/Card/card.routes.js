import express from "express";
import { saveCard } from "./card.controller.js";

const router = express.Router();

router.post('/', saveCard)

export default router;