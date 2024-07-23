import express from "express"
// const log =require("../controllers/auth.controller.js")
import {signup,login,logout,getUserDetails} from "../controllers/auth.controller.js"

const router= express.Router()

//const {login,logout}=log
router.post("/signup",signup)
router.post("/login",login)
router.post("/logout",logout)
router.get("/getUserDetails",getUserDetails)

//module.exports=router
export default router
