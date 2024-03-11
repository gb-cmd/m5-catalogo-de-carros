import { prisma } from "../../database/prisma";
import { createCarMock } from "../__mocks__/car.mock";
import { request } from "../utils/request";

describe("Integration Test: Delete a car", () => {

    beforeEach(async () => {
        await prisma.car.deleteMany();
    });

    test("should be able to delete a car successfully", async () => {
        await prisma.car.create({ data: createCarMock });

        const read = await prisma.car.findMany();
        
        await request
        .delete(`/cars/${read[0].id}`)
        .expect(204)
        .then(response => response.body);
    });

    test("should throw error when id is invalid", async () => {
        await prisma.car.create({ data: createCarMock });

        const invalidId = "58a9445c-a8fa-4426-8109-e0842d7081ca";
        
        await request
        .delete(`/cars/${invalidId}`)
        .expect(404)
        .then(response => response.body);

    });
});