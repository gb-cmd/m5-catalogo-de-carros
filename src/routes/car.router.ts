import { Router } from "express";
import { CarController } from "../controllers/car.controller";
import { ValidateParamId } from "../middlewares/ValidateParamId.middleware";
import { ValidateRequest } from "../middlewares/ValidateRequest.middleware";
import { createCarSchema, updateCarSchema } from "../schemas/car.schema";
import { container } from "tsyringe";
import { CarServices } from "../services/car.services";

export const carRouter = Router();

container.registerSingleton("CarServices", CarServices);
const carController = container.resolve(CarController);

carRouter.post("", 
    ValidateRequest.execute({ body: createCarSchema }), 
    (req, res) => carController.createCar(req, res)
);

carRouter.get("", (req, res) => carController.getManyCars(req, res));

carRouter.get("/:id", 
    ValidateParamId.execute, 
    (req, res) => carController.getCarById(req, res)
);

carRouter.patch("/:id", 
    ValidateRequest.execute({ body: updateCarSchema }), 
    ValidateParamId.execute, 
    (req, res) => carController.updateCar(req, res)
);

carRouter.delete("/:id", 
    ValidateParamId.execute, 
    (req, res) => carController.deleteCar(req, res)
);