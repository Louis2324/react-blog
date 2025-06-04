import express from "express";
import { connectDB } from "./config/db.js";
import router  from "./routes/blogRoutes.js"
import {notFound}  from "./middleware/notFound.js"
import {errorHandler}  from "./middleware/errorHandler.js"
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/blogs",router);
app.use(notFound);
app.use(errorHandler);

app.listen(process.env.PORT, ()=>{
    connectDB();
    console.log(`Server is running at http://localhost:${process.env.PORT}`);
})