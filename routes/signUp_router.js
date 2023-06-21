import { addSignup } from "../controller/signUp_controller.js";
import express from "express";

const router=express.Router();
router.post('/',addSignup)

export default router;
