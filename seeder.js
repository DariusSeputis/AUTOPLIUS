import mongoose from "mongoose";
import UserAndCars from "./models/userAndCars.js";
import dotenv from "dotenv";
import colors from "colors";
dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((response) => {
    let user = {
      name: "Darius",
      surname: "Cloude van damme",
      email: "bla@bla.com",
      password: "mypassword123",
      cars: [
        { make: "audi", model: "a1", year: 1222, price: 1234 },
        { make: "auudi", model: "a11", year: 3222, price: 3234 },
      ],
    };
    UserAndCars.insertMany(user);
    console.log("data sended to mongoDB");
  });
