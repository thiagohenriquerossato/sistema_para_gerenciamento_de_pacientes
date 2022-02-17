import { Tutor } from ".prisma/client";

import prismaClient from "../../../prisma";

class GetTutorByIDService {
    async execute(id: string): Promise<Tutor> {
        const tutor = await prismaClient.tutor.findUnique({
            where: {
                id,
            },
            include: {
                animals: true,
            },
        });
        return tutor;
    }
}

export { GetTutorByIDService };
