import { prisma } from "../../database/prisma";
import "reflect-metadata";
import { createCarMock, invalidUpdateCarMock, updateCarMock } from "../__mocks__/car.mock";
import { request } from "../utils/request";

describe("Integration Test: Update a car", () => {

    beforeEach(async () => {
        await prisma.car.deleteMany();
    });

    test("should be able to update a car successfully", async () => {
        await prisma.car.create({ data: createCarMock });

        const read = await prisma.car.findMany();
        
        const data = await request
        .patch(`/cars/${read[0].id}`)
        .send(updateCarMock)
        .expect(200)
        .then(response => response.body);

        expect(data.id).toBeDefined();
        expect(data.name).toBe(createCarMock.name);
        expect(data.description).toBe(createCarMock.description);
        expect(data.brand).toBe(createCarMock.brand);
        expect(data.year).toBe(updateCarMock.year);
        expect(data.km).toBe(createCarMock.km);
    });
    
    test("should throw error when id is invalid", async () => {
        await prisma.car.create({ data: createCarMock });

        const invalidId = "58a9445c-a8fa-4426-8109-e0842d7081ca";
        
        await request
        .patch(`/cars/${invalidId}`)
        .send(updateCarMock)
        .expect(404)
        .then(response => response.body);

    });

    test("should throw error when try to update a car with a invalid data types", async () => {
        await prisma.car.create({ data: createCarMock });

        const read = await prisma.car.findMany();

        await request
        .patch(`/cars/${read[0].id}`)
        .send(invalidUpdateCarMock)
        .expect(400)
        .then(response => response.body);
    });
});