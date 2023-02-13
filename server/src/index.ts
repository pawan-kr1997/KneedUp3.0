import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import path from "path";
import Stripe from "stripe";
import * as dotenv from "dotenv";

import { postRoutes } from "./Routes/Post";
import { userRoutes } from "./Routes/User";
import { subscriptionRoutes } from "./Routes/Subscription";

dotenv.config();
const app = express();

export const stripe = new Stripe(process.env.STRIPE_SECRET as string, { apiVersion: "2020-08-27" });

app.use((req, res, next) => {
    if (req.originalUrl === "/webhooks") {
        next();
    } else {
        express.json()(req, res, next);
    }
});
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(postRoutes);
app.use(userRoutes);
app.use(subscriptionRoutes);

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "/client/build")));
app.get("*", (req, res) => res.sendFile(path.join(__dirname, "/client/build/index.html")));

app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json("" + error);
});

const port = process.env.PORT || 8090;
app.listen(port, () => console.log("listening for port 8090"));
