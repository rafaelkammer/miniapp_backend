import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

const categoryData: Prisma.CategoryCreateInput[] = [
  {
    name: "Processors",
  },
  {
    name: "Graphic Cards",
  },
  {
    name: "Motherboards",
  },
];

async function main() {
  console.log(`Start seeding ...`);
  for (const u of categoryData) {
    const category = await prisma.category.create({
      data: u,
    });
    console.log(`Created category with id: ${category.ukey}`);
  }
  console.log(`Seeding finished.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
