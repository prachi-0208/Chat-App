import express from "express";

import {
  Login,
  Register,
  bookmark,
  follow,
  getMyProfile,
  getOtherUsers,
  logout,
  unfollow,
} from "../controllers/userController.js";
import isAuthenticated from "../config/auth.js";

const router = express.Router();

// register is post as data is sent

router.route("/register").post(Register);
router.route("/login").post(Login);
// these are used for connecting with mongodb....
// yeh http://localhost:8080/api/v1/user/login use karke req ja raha h

//logout with get as no data being sent
router.route("/logout").get(logout);

// bookmark
router.route("/bookmark/:id").put(isAuthenticated, bookmark);
// only auth can bookmark

// profile
router.route("/profile/:id").get(isAuthenticated, getMyProfile);

// to get other users
router.route("/otheruser/:id").get(isAuthenticated, getOtherUsers);

// to get followers
router.route("/follow/:id").post(isAuthenticated, follow);
router.route("/unfollow/:id").post(isAuthenticated, unfollow);
export default router;
