// connection for mongodb
// connection for mongodb

import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({
  path: "../config/.env",
});
const databaseConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("Connected to mongoDB");
    })
    .catch((error) => {
      console.log(error);
    });
};
export default databaseConnection;
// import mongoose from "mongoose";
// import dotenv from "dotenv";
// dotenv.config({
//   path: "../config/.env",
// });

// const databaseConnection = () => {
//   return mongoose.connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });
// };

// export default databaseConnection;
