import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const deleteProductController = async (req: Request, res: Response) => {
  const { ukey } = req.params;
  try {
    const deleteProduct = await prisma.product.delete({
      where: { ukey: Number(ukey) },
    });

    res.status(204).json(deleteProduct);
  } catch (error) {
    res.status(400).json({
      error: `Product with Ukey ${ukey} does not exist in the database`,
    });
  }
};

export default deleteProductController;
