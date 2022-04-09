import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const retrieveProductController = async (req: Request, res: Response) => {
  const products = await prisma.product.findMany();
  res.status(200).json(products);
};

export default retrieveProductController;
