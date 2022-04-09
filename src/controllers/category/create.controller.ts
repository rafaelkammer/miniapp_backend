import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const createCategoryController = async (req: Request, res: Response) => {
  const { name } = req.body;
  const newCategory = await prisma.category.create({
    data: {
      name,
    },
  });
  res.status(201).json(newCategory);
};

export default createCategoryController;
