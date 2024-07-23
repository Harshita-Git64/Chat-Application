import express from "express"
import { sendMessage,getMessage } from "../controllers/message.controller.js"
import protectRoute from "../middleware/protectRoute.js"

const router=express.Router()

router.get("/get/:id",protectRoute,getMessage)
router.post("/send/:id",protectRoute,sendMessage)//protectRoute middleware checks if user is logged in 

export default router;