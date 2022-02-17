import dayjs from "dayjs";

import { Animal, Gender } from ".prisma/client";

import prismaClient from "../../../prisma";

interface IRequest {
    species: string;
    name: string;
    birth: Date;
    weight: number;
    breed: string;
    gender: Gender;
    pre_existing_diseases: string[];
}

class CreateAnimalService {
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
        tutor_id: string
    ): Promise<Animal> {
        const tutor = await prismaClient.tutor.findFirst({
            where: {
                id: tutor_id,
            },
        });
        if (!tutor) {
            throw new Error("Tutor não existe!");
        }

        const animal = await prismaClient.animal.create({
            data: {
                species,
                name,
                birth: dayjs(birth).toDate(),
                weight,
                breed,
                gender,
                pre_existing_diseases,
                tutor_id,
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

export { CreateAnimalService };
