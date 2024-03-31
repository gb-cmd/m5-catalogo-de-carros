import { prisma } from "../database/prisma";

export class UserServices {
    async create(body: any): Promise<any> {
        const createUser = await prisma.user.create({ data: body });

        
    }

    async login() {

    }

    async autoLogin() {

    }
}