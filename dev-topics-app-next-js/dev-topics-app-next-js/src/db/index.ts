import { PrismaClient } from '@prisma/client';

export const db = new PrismaClient();

// const prismaClient = new PrismaClient();
// const modelNames = Object.keys(prismaClient).filter(
//   (key) => !['_', '$'].includes(key[0])
// );

// for (let i = 0; i < modelNames.length; i += 1) {
//   const name = modelNames[i];
//   try {
//     // @ts-expect-error https://github.com/prisma/docs/issues/451
//     await prismaClient[name].deleteMany();
//   } catch (e) {
//     console.error(`Error while deleting ${name}`);
//     throw e;
//   }
// }
