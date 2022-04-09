import express, { json } from "express";
import router from "./routes";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();

app.use(json());
app.use(cors());
app.use("", router);

export default app;
