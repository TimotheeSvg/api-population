import {generateToken} from "../controllers/auth.controller.js";
import express from "express";

const authRouter = express.Router();

authRouter.get(
    "/",
    generateToken
);
export default authRouter;