import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const updateProductController = async (req: Request, res: Response) => {
  const { ukey } = req.params;
  const { name, code, quantity, is_active, category_ukey } = req.body;

  try {
    const newProduct = await prisma.product.update({
      where: { ukey: Number(ukey) },
      data: { name, code, quantity, is_active, category_ukey },
    });

    res.status(200).json(newProduct);
  } catch (error) {
    res.status(400).json({
      error: `Product with Ukey ${ukey} does not exist in the database`,
    });
  }
};

export default updateProductController;
