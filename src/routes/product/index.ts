import { Router } from "express";
import {
  retrieveProductController,
  createProductController,
  updateProductController,
  deleteProductController,
} from "../../controllers";

const productRouter = Router();

productRouter.get("", retrieveProductController);

productRouter.post("", createProductController);

productRouter.put("/:ukey", updateProductController);

productRouter.delete("/:ukey", deleteProductController);

export default productRouter;
