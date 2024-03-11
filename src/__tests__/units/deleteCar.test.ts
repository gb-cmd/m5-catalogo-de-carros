import { prisma } from "../../database/prisma";
import { CarServices } from "../../services/car.services";
import { createCarMock } from "../__mocks__/car.mock";

describe("Unit test: update car", () => {
    beforeEach(async () => {
        await prisma.car.deleteMany();
    });

    test("should be able to update a car successfully", async () => {
        const carServices = new CarServices(); 

        const createCar = await carServices.createCar(createCarMock);

        await carServices.deleteCar(createCar.id);
    });
});