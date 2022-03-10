import { Animal } from ".prisma/client";

import prismaClient from "../../../prisma";
import cloudinary from "../../../utils/cloudinary";
import { deleFile } from "../../../utils/file";

class UploadAnimalAvatarService {
    async execute(avatar: string, animal_id: string): Promise<Animal> {
        try {
            const hasAvatar = await prismaClient.animal.findFirst({
                where: {
                    id: animal_id,
                },
            });
            if (hasAvatar.avatar) {
                await deleFile(`./public/images/animal/${hasAvatar.avatar}`);
                const [, file] = hasAvatar.avatar.split("tutores/");
                const public_id = `syspet/images/pets/${file.split(".")[0]}`;
                try {
                    await cloudinary.v2.uploader.destroy(public_id);
                } catch (error) {
                    throw new Error("erro aqui deletando avatar");
                }
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
            console.log(animal);

            return animal;
        } catch (error) {
            throw new Error("animal does not exists");
        }
    }
}

export { UploadAnimalAvatarService };
