import { Vaccine } from ".prisma/client";

import prismaClient from "../../../prisma";

class ListVaccinesService {
    async execute(): Promise<Vaccine[]> {
        const vaccines = await prismaClient.vaccine.findMany({
            orderBy: {
                created_at: "desc",
            },
            include: {
                animal: true,
            },
        });

        return vaccines;
    }
}

export { ListVaccinesService };
