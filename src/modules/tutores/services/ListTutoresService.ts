import { Tutor } from ".prisma/client";

import prismaClient from "../../../prisma";

class ListTutoresService {
    async execute(): Promise<Tutor[]> {
        const tutores = await prismaClient.tutor.findMany({
            orderBy: {
                name: "asc",
            },

            include: {
                animals: true,
            },
        });

        return tutores;
    }
}

export { ListTutoresService };
