// import jwt from "jsonwebtoken";
// import dotenv from "dotenv";
// dotenv.config();

// // req, res, and next: next takes part only when the above two are done
// const isAuthenticated = async (req, res, next) => {
//   try {
//     const token = req.cookies.token;

//     if (!token) {
//       return res.status(401).json({
//         message: "User not authenticated.",
//         success: false,
//       });
//     }

//     const decoded = await jwt.verify(token, process.env.TOKEN_SECRET);
//     req.user = decoded.userId;

//     // After req and res are successful
//     next();
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({
//       message: "Server error. User not authenticated.",
//       success: false,
//     });
//   }
// };

// export default isAuthenticated;

// after creating 3 apis register, login , logout,
//  we only want the user to be login when the post , so this is hat this pg does
// logedin users can only tweet

import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config({
  path: "../config/.env",
});

//req, res and next : next takes part only when the above two are done

const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    // token cookies me
    console.log(token);
    if (!token) {
      return res.status(401).json({
        message: "User not authenticated.",
        success: false,
      });
    }
    // token and secret key
    const decode = await jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = decode.userId;

    //after req and res are successful
    next();
  } catch (error) {
    console.log(error);
  }
};
export default isAuthenticated;
