import { NextFunction, Request, Response } from "express";
import { prisma } from "../database/prisma";
import { AppError } from "../errors/AppError";

export class ValidateParamId {
    static async execute(req: Request, _: Response, next: NextFunction) {
        const { id } = req.params;
        
        const foundCar = await prisma.car.findFirst({ where: { id: id } });
        
        if(!foundCar) {
            throw new AppError(404, "Car not found.");
        }

        return next();
    }
}