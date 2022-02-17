import { Vaccine } from ".prisma/client";

import prismaClient from "../../../prisma";

interface IRequest {
    medicine: string;

    next_dose: string;
}

class CreateVaccineService {
    async execute(
        { medicine, next_dose }: IRequest,
        animal_id: string
    ): Promise<Vaccine> {
        const animal = await prismaClient.animal.findFirst({
            where: {
                id: animal_id,
            },
        });

        if (!animal) {
            throw new Error("Animal does not existis");
        }

        const date = new Date(next_dose);

        const vaccine = await prismaClient.vaccine.create({
            data: {
                animal_id,
                medicine,
                next_dose: date,
            },
        });

        return vaccine;
    }
}

export { CreateVaccineService };
