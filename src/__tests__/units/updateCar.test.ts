import { prisma } from "../../database/prisma";
import { CarServices } from "../../services/car.services";
import { createCarMock, updateCarMock } from "../__mocks__/car.mock";

describe("Unit test: update car", () => {
    beforeEach(async () => {
        await prisma.car.deleteMany();
    });

    test("should be able to update a car successfully", async () => {
        const carServices = new CarServices(); 

        const createCar = await carServices.createCar(createCarMock);

        const data = await carServices.updateCar(updateCarMock, createCar.id);

        expect(data.id).toBe(createCar.id);
        expect(data.name).toBe(createCarMock.name);
        expect(data.description).toBe(createCarMock.description);
        expect(data.brand).toBe(createCarMock.brand);
        expect(data.year).toBe(updateCarMock.year);
        expect(data.km).toBe(createCarMock.km);
    });
});