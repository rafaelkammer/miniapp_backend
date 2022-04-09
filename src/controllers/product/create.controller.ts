import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const createProductController = async (req: Request, res: Response) => {
  const { name, code, quantity, is_active, category_ukey } = req.body;
  const newProduct = await prisma.product.create({
    data: { name, code, quantity, is_active, category_ukey },
  });
  res.status(201).json(newProduct);
};

export default createProductController;
