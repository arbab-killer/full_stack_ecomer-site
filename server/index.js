import dotenv from "dotenv";
dotenv.config();
import express from "express";
import bodyParser from "body-parser";
import connectDb from "./utility/db.config.js";
import cors from "cors";
import {signuproute, user} from "./routes/user.route.js";
import {loginroute} from "./routes/user.route.js";
import { isAuth } from "./middlewears/authmiddlewear.js";

const app = express();
connectDb();
//middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
app.use('/api/v1',signuproute);
app.use('/api/v1',loginroute);
app.use('/api/v1',user)

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
