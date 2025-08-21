// import express from "express";
// import dotenv from "dotenv";
// import databaseConnection from "./config/database.js";
// import cookieParser from "cookie-parser";
// import userRoute from "./routes/userRoute.js";
// import tweetRoute from "./routes/tweetRoute.js";
// import cors from "cors";

// // const corsOption = {
// //   origin: ["http://localhost:3000"],
// //   credentials: true,
// //   methods: ["GET", "POST", "PUT", "DELETE"],
// // };
// // app.use(cors(corsOption));
// //the env me port jo def.. h
// // controller routes, models... are backend naming programs
// dotenv.config({
//   path: ".env",
// });

// // PORT=8080

// //database from database.js in config
// // databaseConnection();
// databaseConnection();
// // .then(() => console.log("Database connected successfully"))
// // .catch((err) => console.error("Database connection error: " + err));

// const app = express();

// // middlewares
// // ggogle said: in web development, middleware is a function that runs between a request and a response. It can perform tasks before the controller is executed, or after the controller returns a response. Middleware's primary features include: Modifying request and response objects, Authentication and authorization checks, Error handling, and Request and response loggin
// app.use(
//   express.urlencoded({
//     extended: true,
//   })
// );
// app.use(express.json());

// app.use(cookieParser());
// const corsOptions = {
//   origin: "https://chatters-gray.vercel.app",
//   credentials: true,
// };
// app.use(cors(corsOptions));

// //for deploment
// app.get("/api", (req, res) => {
//   res.send("Hello from the backend!");
// });

// // api
// app.use("/api/v1/user", userRoute);

// // the first one will be at
// //  http://localhost:8080/api/v1/user/register
// //check

// app.get("/home", (req, res) => {
//   res.status(200).json({
//     message: "I WANTTTTTTT TOOOO CRYYYYYY",
//   });
// });

// // the above will give on localhost:8080/home this:
// //{"message":"I WANTTTTTTT TOOOO CRYYYYYY"}

// // for tweets

// app.use("/api/v1/tweet", tweetRoute);

// app.listen(process.env.PORT, () => {
//   console.log(`Server listen at port ${process.env.PORT}`);
// });

import express from "express";
import dotenv from "dotenv";
import databaseConnection from "./config/database.js";
import cookieParser from "cookie-parser";
import userRoute from "./routes/userRoute.js";
import tweetRoute from "./routes/tweetRoute.js";
import cors from "cors";

dotenv.config({
  path: ".env",
});

const PORT = process.env.PORT || 8080;

databaseConnection();
// .then(() => console.log("Database connected successfully"))
// .catch((err) => console.error("Database connection error: " + err));

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

const corsOptions = {
  origin: "https://chatters-gray.vercel.app",
  credentials: true,
};
app.use(cors(corsOptions));

app.get("/api", (req, res) => {
  res.send("Hello from the backend!");
});

app.use("/api/v1/user", userRoute);
app.use("/api/v1/tweet", tweetRoute);

app.get("/home", (req, res) => {
  res.status(200).json({
    message: "I WANTTTTTTT TOOOO CRYYYYYY",
  });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}`);
});

// import express from "express";
// import dotenv from "dotenv";
// import databaseConnection from "./config/database.js"; // Adjust path if needed
// import cookieParser from "cookie-parser";
// import userRoute from "./routes/userRoute.js"; // Adjust path if needed
// import tweetRoute from "./routes/tweetRoute.js"; // Adjust path if needed
// import cors from "cors";

// // Load environment variables
// dotenv.config({
//   path: ".env",
// });

// // Connect to the database
// databaseConnection()
//   .then(() => console.log("Database connected successfully"))
//   .catch((err) => console.error("Database connection error: " + err));

// const app = express();

// // Middleware
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(cookieParser());
// app.use(
//   cors({ origin: "https://chatters-gray.vercel.app", credentials: true })
// );

// // Routes
// app.get("/api", (req, res) => res.send("Hello from the backend!"));
// app.use("/api/v1/user", userRoute);
// app.use("/api/v1/tweet", tweetRoute);

// Export as a serverless function
export default app;

// import express from "express";
// import dotenv from "dotenv";
// import databaseConnection from "./config/database.js";
// import cookieParser from "cookie-parser";
// import userRoute from "./routes/userRoute.js";
// import tweetRoute from "./routes/tweetRoute.js";
// import cors from "cors";

// // Load environment variables from .env file
// dotenv.config({
//   path: ".env",
// });

// // Connect to the database
// databaseConnection();

// const app = express();

// // Middleware to parse URL-encoded data
// app.use(
//   express.urlencoded({
//     extended: true,
//   })
// );

// // Middleware to parse JSON data
// app.use(express.json());

// // Middleware to handle cookies
// app.use(cookieParser());

// // CORS options
// const corsOptions = {
//   origin: "http://localhost:3000", // Allow requests from this origin
//   credentials: true,
// };
// app.use(cors(corsOptions));

// // Route to test the backend
// app.get("/api", (req, res) => {
//   res.send("Hello from the backend!");
// });

// // Routes for user-related operations
// app.use("/api/v1/user", userRoute);

// // Test route
// app.get("/home", (req, res) => {
//   res.status(200).json({
//     message: "I WANTTTTTTT TOOOO CRYYYYYY",
//   });
// });

// // Routes for tweet-related operations
// app.use("/api/v1/tweet", tweetRoute);

// // Export the Express app to be used by Vercel serverless functions
// export default app;

// // Listen on the port defined in the environment variable or default to 3000
// const port = process.env.PORT || 3000;
// app.listen(port, () => {
//   console.log(`Server listening at port ${port}`);
// });
