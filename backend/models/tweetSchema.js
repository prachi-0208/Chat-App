import mongoose from "mongoose";
// same as user
//inc. all that u need
//user detail storred here
const tweetSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
    },
    like: {
      type: Array,
      default: [],
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    userDetails: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);
// with array default is asn empty array
// required set to true for fields that are sure to be included
export const Tweet = mongoose.model("Tweet", tweetSchema);
