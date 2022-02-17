import { PrismaClient } from "@prisma/client";
import { hash } from "bcrypt";

const prisma = new PrismaClient();

async function main() {
    const password = await hash("admin", 8);
    await prisma.user.updateMany({
        where: {
            name: "admin",
        },
        data: {
            name: "admin",
            email: "thiago.rossato.tr@gmail.com",
            password,
        },
    });
}

main()
    .catch((e) => {
        console.log(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
