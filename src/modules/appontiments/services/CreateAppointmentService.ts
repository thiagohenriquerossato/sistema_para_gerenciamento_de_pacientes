import { Appointment } from ".prisma/client";

import prismaClient from "../../../prisma";

class CreateAppointmentService {
    async execute(
        date: string,
        animal_id: string,
        type: string
    ): Promise<Appointment> {
        const animal = prismaClient.animal.findFirst({
            where: {
                id: animal_id,
            },
        });

        if (!animal) {
            throw new Error("Animal does not exists");
        }

        try {
            const appointment = await prismaClient.appointment.create({
                data: {
                    date,
                    type,
                    animal_id,
                },
                include: {
                    animal: true,
                },
            });
            return appointment;
        } catch (error) {
            throw new Error(error.message);
        }
    }
}

export { CreateAppointmentService };
