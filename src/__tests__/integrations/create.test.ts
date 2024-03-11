import { prisma } from "../../database/prisma";
import { createCarMock, invalidCarMock } from "../__mocks__/car.mock";
import { request } from "../utils/request";

describe("Integration Test: Create a car", () => {

    beforeEach(async () => {
        await prisma.car.deleteMany();
    });

    test("should be able to create a car successfully", async () => {
        const data = await request
        .post("/cars")
        .send(createCarMock)
        .expect(201)
        .then(response => response.body);

        expect(data.id).toBeDefined();
        expect(data.name).toBe(createCarMock.name);
        expect(data.description).toBe(createCarMock.description);
        expect(data.brand).toBe(createCarMock.brand);
        expect(data.year).toBe(createCarMock.year);
        expect(data.km).toBe(createCarMock.km);
    });

    test("should throw error when try to create a car with a missing body parameter", async () => {
        await request
        .post("/cars")
        .expect(400)
        .then(response => response.body);
    });

    test("should throw error when try to create a car with a invalid data types", async () => {
        await request
        .post("/cars")
        .send(invalidCarMock)
        .expect(400)
        .then(response => response.body);
    });
});