import { Tutor } from ".prisma/client";

import prismaClient from "../../../prisma";
import cloudinary from "../../../utils/cloudinary";
import { deleFile } from "../../../utils/file";

class UploadTutorAvatarService {
    async execute(avatar: string, id: string): Promise<Tutor> {
        try {
            const hasAvatar = await prismaClient.tutor.findUnique({
                where: {
                    id,
                },
            });
            if (hasAvatar.avatar) {
                await deleFile(`./public/images/tutores/${hasAvatar.avatar}`);

                const [, file] = hasAvatar.avatar.split("tutores/");
                const public_id = `syspet/images/tutores/${file.split(".")[0]}`;

                try {
                    await cloudinary.v2.uploader.destroy(public_id);
                } catch (error) {
                    console.log("Error deleting old image");
                }
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
