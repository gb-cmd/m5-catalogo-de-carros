import { z } from "zod";
import { createUserReturn, createUserSchema, loginUserReturn, loginUserSchema } from "../schemas/user.schema";

export type TCreateUser = z.infer<typeof createUserSchema>;
export type TCreateUserReturn = z.infer<typeof createUserReturn>;

export type TLoginUser = z.infer<typeof loginUserSchema>;
export type TLoginUserReturn = z.infer<typeof loginUserReturn>;