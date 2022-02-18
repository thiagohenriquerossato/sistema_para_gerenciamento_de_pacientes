import { Tutor } from ".prisma/client";

import prismaClient from "../../../prisma";

class GetTutorByNameService {
    async execute(name: string): Promise<Tutor[]> {
        const tutor = await prismaClient.tutor.findMany({
            where: {
                name: {
                    contains: name,
                    mode: "insensitive",
                },
            },
            include: {
                animals: true,
            },
        });

        return tutor;
    }
}

export { GetTutorByNameService };
