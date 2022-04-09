import app from "./app";

const PORT = process.env.RUN_PORT ? process.env.RUN_PORT : 3000;

const server = app.listen(PORT, () =>
  console.log(`App is running at: http://localhost:${PORT}`)
);
