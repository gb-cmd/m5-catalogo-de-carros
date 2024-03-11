import { Request, Response } from "express";
import { CarServices } from "../services/car.services";
import { inject, injectable } from "tsyringe";

@injectable()
export class CarController {
    constructor(@inject("CarServices") private carServices: CarServices) {}

    async createCar(req: Request, res: Response) {

        const newCar = await this.carServices.createCar(req.body);

        return res.status(201).json(newCar);
    }

    async getManyCars(_: Request, res: Response) {

        const getCars = await this.carServices.readCars();

        return res.status(200).json(getCars);
    }

    async getCarById(req: Request, res: Response) {

        const getById = await this.carServices.readCarById(req.params.id);

        return res.status(200).json(getById)
    }

    async updateCar(req: Request, res: Response) {

        const updateCar = await this.carServices.updateCar(req.body, req.params.id);

        return res.status(200).json(updateCar);
    }

    async deleteCar(req: Request, res: Response) {

        await this.carServices.deleteCar(req.params.id);

        return res.status(204).json();
    }
}