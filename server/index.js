import dotenv from "dotenv";
dotenv.config();
import path from "path";
import express from "express";
import bodyParser from "body-parser";
import connectDb from "./utility/db.config.js";
import cors from "cors";
import {signuproute,loginroute, user} from "./routes/user.route.js";
import { createproductroute,  getsingleproductroute,  productsroute } from "./routes/product.route.js";

const app = express();
connectDb();
//middleware
app.use('/uploads',express.static('uploads'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api/v1',signuproute);
app.use('/api/v1',loginroute);
app.use('/api/v1',user)
app.use('/api/v1', productsroute)
app.use('/api/v1', createproductroute)
app.use('/api/v1', getsingleproductroute)

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
