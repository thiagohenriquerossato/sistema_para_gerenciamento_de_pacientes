import { Animal } from ".prisma/client";

import prismaClient from "../../../prisma";

class ListAnimalsService {
    async execute(): Promise<Animal[]> {
        const animals = await prismaClient.animal.findMany({
            orderBy: {
                name: "asc",
            },

            include: {
                tutor: true,
                vaccines: true,
                appointments: true,
            },
        });

        return animals;
    }
}

export { ListAnimalsService };
