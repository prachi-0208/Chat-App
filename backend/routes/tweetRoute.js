import express from "express";
import {
  createTweet,
  deleteTweet,
  getAllTweets,
  getFollowingTweets,
  likeOrDislike,
} from "../controllers/tweetController.js";
import isAuthenticated from "../config/auth.js";

const router = express.Router();

// to tweet
router.route("/create").post(isAuthenticated, createTweet);
router.route("/create").post(isAuthenticated, createTweet);

//  delete
router.route("/delete/:id").delete(isAuthenticated, deleteTweet);

// like dislike
router.route("/like/:id").put(isAuthenticated, likeOrDislike);

// tweetsss
router.route("/alltweets/:id").get(isAuthenticated, getAllTweets);
router.route("/followingtweets/:id").get(isAuthenticated, getFollowingTweets);
export default router;
