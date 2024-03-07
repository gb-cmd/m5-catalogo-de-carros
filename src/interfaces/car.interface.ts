import { z } from "zod";
import { carSchema, createCarSchema, updateCarSchema } from "../schemas/car.schema";

export type TCarReturn = z.infer<typeof carSchema>;
export type TCreateCar = z.infer<typeof createCarSchema>;
export type TUpdateCar = z.infer<typeof updateCarSchema>;