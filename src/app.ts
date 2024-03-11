import "reflect-metadata";
import "express-async-errors";
import express, { json } from "express";
import { carRouter } from "./routes/car.router";
import { HandleErrors } from "./middlewares/HandleErrors.middleware";

export const app = express();

app.use(json());

app.use("/cars", carRouter);

app.use(HandleErrors.execute);