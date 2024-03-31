import { z } from "zod";
import { baseSchema } from "./base.schema";
import { userCarSchema } from "./user.schema";

export const carSchema = baseSchema.extend({
    name: z.string().min(3).max(255),
    description: z.string().min(3).nullish(),
    brand: z.string().min(3).max(255),
    year: z.number().positive(),
    km: z.number().positive(),
    userId: z.string().nullish(),
    user: userCarSchema.nullish()
});

export const createCarSchema = carSchema.omit({ id: true, userId: true, user: true });
export const updateCarSchema = createCarSchema.partial();