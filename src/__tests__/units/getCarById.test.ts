import { prisma } from "../../database/prisma";
import { CarServices } from "../../services/car.services";
import { createCarMock } from "../__mocks__/car.mock";


describe("Unit test: get car by id", () => {
    beforeEach(async () => {
        await prisma.car.deleteMany();
    });

    test("should be able to get a car by id successfully", async () => {
        const carServices = new CarServices(); 

        const getCar = await carServices.createCar(createCarMock);

        const data = await carServices.readCarById(getCar.id);

        expect(data.id).toBe(getCar.id);
        expect(data.name).toBe(createCarMock.name);
        expect(data.description).toBe(createCarMock.description);
        expect(data.brand).toBe(createCarMock.brand);
        expect(data.year).toBe(createCarMock.year);
        expect(data.km).toBe(createCarMock.km);
    });
});