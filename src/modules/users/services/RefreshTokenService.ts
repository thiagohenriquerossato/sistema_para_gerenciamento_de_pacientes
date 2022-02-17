import dayjs from "dayjs";
import { verify, sign } from "jsonwebtoken";

import auth from "../../../config/auth";
import prismaClient from "../../../prisma";

interface IPayload {
    sub: string;

    role: string;
}

class RefreshTokenService {
    async execute(token: string): Promise<string> {
        const { role, sub } = verify(
            token,
            auth.secret_refresh_token
        ) as IPayload;

        const user_id = sub;

        const userTokens = await prismaClient.userToken.findFirst({
            where: {
                user_id,
                refresh_token: token,
            },
        });

        if (!userTokens) {
            throw new Error("Refresh Token dows not exists!");
        }

        await prismaClient.userToken.delete({
            where: {
                id: userTokens.id,
            },
        });

        const refresh_token_expires_date = dayjs()
            .add(auth.expires_in_refresh_token_days, "days")
            .toDate();

        const refresh_token = sign({ role }, auth.secret_refresh_token, {
            subject: user_id,

            expiresIn: auth.expires_in_refresh_token,
        });

        await prismaClient.userToken.create({
            data: {
                user_id,
                expires_in: refresh_token_expires_date,
                refresh_token,
            },
        });

        return refresh_token;
    }
}

export { RefreshTokenService };
