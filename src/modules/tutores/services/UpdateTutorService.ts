import { Tutor } from "@prisma/client";

import prismaClient from "../../../prisma";

interface IRequest {
    name?: string;

    email?: string;

    phone?: string;

    address?: string;
}

class UpdateTutorService {
    async execute(
        {
            name,

            email,

            phone,

            address,
        }: IRequest,

        id: string
    ): Promise<Tutor> {
        const tutor = await prismaClient.tutor.update({
            where: {
                id,
            },
            data: {
                name,

                email,

                phone,

                address,
            },
        });

        return tutor;
    }
}

export { UpdateTutorService };
