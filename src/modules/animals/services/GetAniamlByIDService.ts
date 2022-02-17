import { Animal } from "@prisma/client";

import prismaClient from "../../../prisma";

class GetAnimalByIDService {
    async execute(id: string): Promise<Animal> {
        const animal = await prismaClient.animal.findUnique({
            where: {
                id,
            },
            include: {
                tutor: true,
                vaccines: true,
                appointments: true,
            },
        });
        return animal;
    }
}

export { GetAnimalByIDService };
