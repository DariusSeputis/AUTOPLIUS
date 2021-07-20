import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";

import UserAndCars from "./models/userAndCars.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

// Middlewares
app.use(cors());

// connecting DB
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((response) => {
    console.log(`Connected to MongoDB`.blue.underline.bold);
    // Starting server
    app.listen(PORT, () =>
      console.log(`Server is running on port: ${PORT}...`.yellow.underline.bold)
    );
  });

// Route
app.get("/", (req, res) => res.send("API is running..."));

// GET: all cars
app.get("/api/cars", (req, res) => {
  UserAndCars.find({}).then((data) => res.json(data));
});
