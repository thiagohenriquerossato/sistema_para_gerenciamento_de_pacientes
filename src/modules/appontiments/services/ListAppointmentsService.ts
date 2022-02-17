import { Appointment } from ".prisma/client";

import prismaClient from "../../../prisma";

class ListAppointmentsService {
    async execute(): Promise<Appointment[]> {
        const appointments = await prismaClient.appointment.findMany({
            orderBy: {
                date: "desc",
            },
            include: { animal: true },
        });
        return appointments;
    }
}

export { ListAppointmentsService };
