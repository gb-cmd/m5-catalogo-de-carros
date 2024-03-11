import { prisma } from "../../database/prisma"
import { CarServices } from "../../services/car.services";
import { createCarMock } from "../__mocks__/car.mock";

describe("Unit test: create car", () => {
    beforeEach(async () => {
        await prisma.car.deleteMany();
    });

    test("should be able to create a car successfully", async () => {
        const carServices = new CarServices(); 

        const data = await carServices.createCar(createCarMock);

        expect(data.id).toBeDefined();
        expect(data.name).toBe(createCarMock.name);
        expect(data.description).toBe(createCarMock.description);
        expect(data.brand).toBe(createCarMock.brand);
        expect(data.year).toBe(createCarMock.year);
        expect(data.km).toBe(createCarMock.km);
    });
});