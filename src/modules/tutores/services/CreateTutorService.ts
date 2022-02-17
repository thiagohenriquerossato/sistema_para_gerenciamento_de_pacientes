import { Tutor } from ".prisma/client";

import prismaClient from "../../../prisma";

interface IRequest {
    name: string;
    email: string;
    phone: string;
    address: string;
}

class CreateTutorService {
    async execute({ name, email, phone, address }: IRequest): Promise<Tutor> {
        const emailExists = await prismaClient.tutor.findFirst({
            where: {
                email,
            },
        });

        if (emailExists) {
            throw new Error("Email already exists");
        }
        const tutor = await prismaClient.tutor.create({
            data: {
                name,
                email,
                phone,
                address,
            },
            include: {
                animals: true,
            },
        });
        return tutor;
    }
}

export { CreateTutorService };
