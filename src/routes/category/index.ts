import { Router } from "express";
import {
  createCategoryController,
  retrieveCategoryController,
} from "../../controllers";

const categoryRouter = Router();

categoryRouter.get("", retrieveCategoryController);

categoryRouter.post("", createCategoryController);

export default categoryRouter;
