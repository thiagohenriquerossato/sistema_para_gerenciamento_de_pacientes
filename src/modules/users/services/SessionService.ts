import { compare } from "bcrypt";
import dayjs from "dayjs";
import { sign } from "jsonwebtoken";

import auth from "../../../config/auth";
import prismaClient from "../../../prisma";

interface IRequest {
    name: string;

    password: string;
}

interface IResponse {
    user: {
        name: string;

        email: string;
    };

    token: string;

    refresh_token: string;
}

class SessionService {
    async execute({ name, password }: IRequest): Promise<IResponse> {
        const user = await prismaClient.user.findFirst({
            where: {
                name,
            },
        });
        if (!user) {
            throw new Error("Email or Password incorrect");
        }

        const passwordMatch = await compare(password, user.password);

        if (!passwordMatch) {
            throw new Error("Email or Password incorrect");
        }

        const token = sign({}, auth.secret_token, {
            subject: user.id,
            expiresIn: auth.expires_in_token,
        });
        const { role } = user;

        const refresh_token = sign({ role }, auth.secret_refresh_token, {
            subject: user.id,
            expiresIn: auth.expires_in_refresh_token,
        });

        const refresh_token_expires_date = dayjs()
            .add(auth.expires_in_refresh_token_days, "days")
            .toDate();

        await prismaClient.userToken.create({
            data: {
                user_id: user.id,
                expires_in: refresh_token_expires_date,
                refresh_token,
            },
        });

        const tokenReturn: IResponse = {
            token,
            refresh_token,
            user: {
                name: user.name,
                email: user.email,
            },
        };

        return tokenReturn;
    }
}

export { SessionService };
