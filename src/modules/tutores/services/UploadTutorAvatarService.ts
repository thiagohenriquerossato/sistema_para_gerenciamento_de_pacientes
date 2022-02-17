import { Tutor } from ".prisma/client";

import prismaClient from "../../../prisma";
import { deleFile } from "../../../utils/file";

class UploadTutorAvatarService {
    async execute(avatar: string, id: string): Promise<Tutor> {
        try {
            const hasAvatar = await prismaClient.tutor.findUnique({
                where: {
                    id,
                },
            });
            if (hasAvatar) {
                await deleFile(`./public/images/tutores/${hasAvatar.avatar}`);
            }
            const tutor = await prismaClient.tutor.update({
                where: {
                    id,
                },
                data: {
                    avatar,
                    updated_at: new Date(),
                },
            });
            return tutor;
        } catch (error) {
            throw new Error("Tutor does not exists");
        }
    }
}

export { UploadTutorAvatarService };
