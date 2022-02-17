import { Animal } from ".prisma/client";

import prismaClient from "../../../prisma";
import { deleFile } from "../../../utils/file";

class UploadAnimalAvatarService {
    async execute(avatar: string, animal_id: string): Promise<Animal> {
        try {
            const hasAvatar = await prismaClient.animal.findFirst({
                where: {
                    id: animal_id,
                },
            });
            if (hasAvatar) {
                await deleFile(`./public/images/animal/${hasAvatar.avatar}`);
            }
            const animal = await prismaClient.animal.update({
                where: {
                    id: animal_id,
                },
                data: {
                    avatar,
                    updated_at: new Date(),
                },
            });
            return animal;
        } catch (error) {
            throw new Error("animal does not exists");
        }
    }
}

export { UploadAnimalAvatarService };
