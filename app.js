import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const app = express();

// Route
app.get("/", (req, res) => res.send("API is running..."));

// Starting server
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}...`));
