import { z } from "zod";
import { baseSchema } from "./base.schema";

export const carSchema = baseSchema.extend({
    name: z.string().min(3).max(255),
    description: z.string().min(3).nullish(),
    brand: z.string().min(3).max(255),
    year: z.number().positive(),
    km: z.number().positive()
});

export const createCarSchema = carSchema.omit({ id: true });
export const updateCarSchema = createCarSchema.partial();