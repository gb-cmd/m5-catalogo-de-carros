import { z } from "zod";
import { baseSchema } from "./base.schema";
import { createCarSchema } from "./car.schema";

export const userSchema = baseSchema.extend({
    name: z.string().min(2).max(255),
    email: z.string().email(), 
    password: z.string().min(8),
    car: z.array(createCarSchema)
});

export const createUserSchema = userSchema.omit({ 
    id: true, 
    car: true 
});

export const createUserReturn = userSchema.omit({ 
    password: true, 
    car: true 
});

// dados do login
export const loginUserSchema = createUserSchema.omit({ name: true });

// retorno do login
export const loginUserReturn = z.object({ 
    token: z.string(), 
    user: createUserReturn 
});

export const userCarSchema = z.object({
    name: z.string().min(2).max(255),
    email: z.string().email(), 
});