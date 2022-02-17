import dayjs from "dayjs";

import { Animal, Gender } from ".prisma/client";

import prismaClient from "../../../prisma";

interface IRequest {
    species?: string;

    name?: string;

    birth?: Date;

    weight?: number;

    breed?: string;

    gender?: Gender;

    pre_existing_diseases?: string[];
}

class UpdateAnimalService {
    async execute(
        {
            species,

            name,

            birth,

            weight,

            breed,

            gender,

            pre_existing_diseases,
        }: IRequest,

        id: string
    ): Promise<Animal> {
        const animal = await prismaClient.animal.update({
            where: {
                id,
            },
            data: {
                species,

                name,

                birth: dayjs(birth).toDate(),

                weight,

                breed,

                gender,

                pre_existing_diseases,
            },
            include: {
                tutor: {
                    select: {
                        name: true,
                    },
                },
            },
        });

        return animal;
    }
}

export { UpdateAnimalService };
