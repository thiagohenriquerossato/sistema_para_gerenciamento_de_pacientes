import prismaClient from "../../../prisma";

class CancelAppointmentService {
    async execute(appointment_id: string): Promise<void> {
        await prismaClient.appointment.update({
            where: {
                id: appointment_id,
            },
            data: {
                is_canceld: true,
            },
        });
    }
}

export { CancelAppointmentService };
