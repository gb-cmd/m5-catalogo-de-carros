import { Router } from "express";

export const userRouter = Router();

userRouter.post("/", ); // cadastro de usuario

userRouter.post("/login", ); // login de usuario

userRouter.get("/", ); // autologin (retorna o usuario no token de acesso)