import express from "express";
import {  userSignup, userdetails ,} from "../controlers/user.controlar.js";
import { userLogin } from "../controlers/user.controlar.js";
import { isAuth } from "../middlewears/authmiddlewear.js";
const router = express.Router();
const signuproute = router.post("/signup", userSignup);
const loginroute = router.post("/login" , userLogin);
const user = router.get("/user" ,isAuth, userdetails);
export { signuproute, loginroute, user };
