import { Router } from "express";
import { CarController } from "../controllers/car.controller";

export const carRouter = Router();

const carController = new CarController();

carRouter.post("", carController.createCar);

carRouter.get("", carController.getManyCars);

carRouter.get("/:id", carController.getCarById);

carRouter.patch("/:id", carController.updateCar);

carRouter.delete("/:id", carController.deleteCar);