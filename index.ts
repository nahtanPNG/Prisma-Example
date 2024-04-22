import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

(async () => {
    const user1 = await prisma.person.create({
        data: {
            name: 'Nathan',
            username: 'nahtanJPG',
            email: 'nathanPNG20@dev.com',
            addresses: {
                create: {
                    street: "Street ABC"
                }
            }
        }
    });
    const users = await prisma.person.count();
    const addresses = await prisma.address.count();
    console.log(user1);
    console.log({users, addresses})
})()