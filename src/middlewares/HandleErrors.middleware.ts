import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/AppError";
import { ZodError } from "zod";

export class HandleErrors {

    static execute(err: Error, _: Request, res: Response, __: NextFunction) {
        if(err instanceof AppError) {
            return res.status(err.statusCode).json({ error: err.message });

        } else if(err instanceof ZodError) {
            return res.status(400).json(err);
            
        }

        return res.status(500).json({ error: "Internal Server Error" });
    }
}