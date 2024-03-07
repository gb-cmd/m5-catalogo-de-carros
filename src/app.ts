import express, { json } from "express";
import { carRouter } from "./routes/car.router";

export const app = express();

app.use(json());

app.use("/cars", carRouter);