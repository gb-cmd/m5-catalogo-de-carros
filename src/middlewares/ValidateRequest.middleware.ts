import { NextFunction, Request, Response } from "express";
import { IRequestSchemas } from "../interfaces/ValidateRequest.interface";

export class ValidateRequest {
    static execute(schemas: IRequestSchemas) {
        return (req: Request, _: Response, next: NextFunction) => {

            if(schemas.body) {
                req.body = schemas.body.parse(req.body);
            }

            next();
        }
    }
}