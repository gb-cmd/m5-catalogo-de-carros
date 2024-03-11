import { prisma } from "../../database/prisma";
import { CarServices } from "../../services/car.services";
import { createCarMock } from "../__mocks__/car.mock";

describe("Unit test: get cars", () => {
    beforeEach(async () => {
        await prisma.car.deleteMany();
    });

    test("should be able to get cars successfully", async () => {
        const carServices = new CarServices(); 

        await carServices.createCar(createCarMock);
        await carServices.createCar(createCarMock);

        const data = await carServices.readCars();

        expect(data).toHaveLength(2);
        expect(data[0].id).toBeDefined();
        expect(data[1].id).toBeDefined();
    });
});