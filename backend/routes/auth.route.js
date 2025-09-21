import express from "express";
import { login, logout, signup } from "../controllers/auth.control.js";

const authRouter=express.Router();


authRouter.post("/signup",signup);
authRouter.post("/Login",login);
authRouter.get("/logout",logout);

export default authRouter

