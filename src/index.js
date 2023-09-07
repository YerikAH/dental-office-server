import express from "express";
import morgan from "morgan";
import cors from "cors";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { PORT } from "./config.js";
import productsRoutes from "./routes/products.routes.js";

const app = express();
// const __dirname = dirname(fileURLToPath(import.meta.url))

app.use(morgan);
app.use(cors());
app.use(express.json());
app.use(productsRoutes);

app.listen(PORT);
console.log(`Server is listening on port ${PORT}`);