import { prisma } from "../../database/prisma";
import { createCarMock } from "../__mocks__/car.mock";
import { request } from "../utils/request";

describe("Integration Test: Get a single car", () => {

    beforeEach(async () => {
        await prisma.car.deleteMany();
    });

    test("should be able to get a single car successfully", async () => {
        await prisma.car.create({ data: createCarMock });

        const read = await prisma.car.findMany();
        
        const data = await request
        .get(`/cars/${read[0].id}`)
        .expect(200)
        .then(response => response.body);

        expect(data.id).toBeDefined();
        expect(data.name).toBe(createCarMock.name);
        expect(data.description).toBe(createCarMock.description);
        expect(data.brand).toBe(createCarMock.brand);
        expect(data.year).toBe(createCarMock.year);
        expect(data.km).toBe(createCarMock.km);
    });

    test("should throw error when id is invalid", async () => {
        await prisma.car.create({ data: createCarMock });

        const invalidId = "58a9445c-a8fa-4426-8109-e0842d7081ca";
        
        await request
        .get(`/cars/${invalidId}`)
        .expect(404)
        .then(response => response.body);

    });
});