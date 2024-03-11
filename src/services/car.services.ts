import { injectable } from "tsyringe";
import { prisma } from "../database/prisma";
import { TCarReturn, TCreateCar, TUpdateCar } from "../interfaces/car.interface";
import { carSchema } from "../schemas/car.schema";

@injectable()
export class CarServices {

    async createCar(payload: TCreateCar): Promise<TCarReturn> {
        const newCar = await prisma.car.create({ data: payload });

        return carSchema.parse(newCar);
    }

    async readCars(): Promise<Array<TCarReturn>> {
        const readCars = await prisma.car.findMany();

        return carSchema.array().parse(readCars);
    }

    async readCarById(carId: string): Promise<TCarReturn> {
        const findCar = await prisma.car.findFirst({ where: { id: carId } });

        return carSchema.parse(findCar);
    }

    async updateCar(payload: TUpdateCar, carId: string): Promise<TCarReturn> {
        const updatedCar = await prisma.car.update({ where: { id: carId }, data: payload });

        return carSchema.parse(updatedCar);
    }

    async deleteCar(carId: string): Promise<void> {
        await prisma.car.delete({ where: { id: carId } });
    }
}