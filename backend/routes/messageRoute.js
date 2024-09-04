import express from "express"
import {sendMessage} from "../controllers/messageController.js"

const router = express.Router();

router.route("/send/:id").post(sendMessage);

export default router;
