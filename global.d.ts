import { PrismaClient } from "@prisma/client";

declare global {
  // eslint-disable-next-line no-unused-vars
  namespace globalThis {
    // eslint-disable-next-line no-unused-vars
    var prismadb: PrismaClient;
  }
}
