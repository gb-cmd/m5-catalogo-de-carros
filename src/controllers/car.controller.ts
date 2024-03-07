import { Request, Response } from "express";
import { CarServices } from "../services/car.services";

export class CarController {
    async createCar(req: Request, res: Response) {
        const carServices = new CarServices();

        const newCar = await carServices.createCar(req.body);

        return res.status(201).json(newCar);
    }

    async getManyCars(_: Request, res: Response) {
        const carServices = new CarServices();

        const getCars = await carServices.readCars();

        return res.status(200).json(getCars);
    }

    async getCarById(req: Request, res: Response) {
        const carServices = new CarServices();

        const getById = await carServices.readCarById(req.params.id);

        return res.status(200).json(getById)
    }

    async updateCar(req: Request, res: Response) {
        const carServices = new CarServices();

        const updateCar = await carServices.updateCar(req.body, req.params.id);

        return res.status(200).json(updateCar);
    }

    async deleteCar(req: Request, res: Response) {
        const carServices = new CarServices();

        await carServices.deleteCar(req.params.id);

        return res.status(204).json();
    }
}