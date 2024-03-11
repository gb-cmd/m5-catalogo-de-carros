import { AnyZodObject } from "zod";

export interface IRequestSchemas {
    params?: AnyZodObject;
    query?: AnyZodObject;
    body?: AnyZodObject;
}