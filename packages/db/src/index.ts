import { PrismaClient } from "@prisma/client";
// Check your path, it must point to the folder created by 'output'

export const prismaClient = new PrismaClient();