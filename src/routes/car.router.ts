import { Router } from "express";
import { CarController } from "../controllers/car.controller";
import { ValidateParamId } from "../middlewares/ValidateParamId.middleware";
import { ValidateRequest } from "../middlewares/ValidateRequest.middleware";
import { createCarSchema, updateCarSchema } from "../schemas/car.schema";

export const carRouter = Router();

const carController = new CarController();

carRouter.post("", 
    ValidateRequest.execute({ body: createCarSchema }), 
    carController.createCar
);

carRouter.get("", carController.getManyCars);

carRouter.use("/:id", ValidateParamId.execute);

carRouter.get("/:id", carController.getCarById);

carRouter.patch("/:id", 
    ValidateRequest.execute({ body: updateCarSchema }), 
    carController.updateCar
);

carRouter.delete("/:id", carController.deleteCar);