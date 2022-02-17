import { Vaccine } from ".prisma/client";

import prismaClient from "../../../prisma";

class ListVaccineByAnimalIDService {
    async execute(animal_id: string): Promise<Vaccine[]> {
        const animal = await prismaClient.animal.findFirst({
            where: {
                id: animal_id,
            },
        });
        if (!animal) {
            throw new Error("Animal does not exists!");
        }

        const vaccines = await prismaClient.vaccine.findMany({
            where: {
                animal_id,
            },
            orderBy: {
                created_at: "asc",
            },
        });

        return vaccines;
    }
}

export { ListVaccineByAnimalIDService };
