import { prisma } from "../../database/prisma";
import { createCarMockList, createCarMock, createOtherCarMock } from "../__mocks__/car.mock";
import { request } from "../utils/request";

describe("Integration Test: Get cars", () => {

    beforeEach(async () => {
        await prisma.car.deleteMany();
    });

    test("should be able to get cars successfully", async () => {
        await prisma.car.createMany({ data: createCarMockList });

        const data = await request
        .get("/cars")
        .expect(200)
        .then(response => response.body);

        expect(data).toHaveLength(2);

        expect(data[0].id).toBeDefined();
        expect(data[0].name).toBe(createCarMock.name);
        expect(data[0].description).toBe(createCarMock.description);
        expect(data[0].brand).toBe(createCarMock.brand);
        expect(data[0].year).toBe(createCarMock.year);
        expect(data[0].km).toBe(createCarMock.km);

        expect(data[1].id).toBeDefined();
        expect(data[1].name).toBe(createOtherCarMock.name);
        expect(data[1].description).toBe(createOtherCarMock.description);
        expect(data[1].brand).toBe(createOtherCarMock.brand);
        expect(data[1].year).toBe(createOtherCarMock.year);
        expect(data[1].km).toBe(createOtherCarMock.km);
    });
});