// import axios from "axios";
// import { TWEET_API_END_POINT, USER_API_END_POINT } from "../utils/constant";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getMyProfile } from "../redux/userSlice";
// import { getAllTweets } from "../redux/tweetSlice";

// const useGetMyTweets = (id) => {
//   const { refresh } = useSelector((store) => store.tweet);

//   const dispatch = useDispatch();
//   const fetchMyTweets = async () => {
//     try {
//       const res = await axios.get(`${TWEET_API_END_POINT}/alltweets/${id}`, {
//         withCredentials: true,
//       });
//       console.log(res);
//       dispatch(getAllTweets(res.data.tweets));
//       // tweets at the end as the api returns tweets
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   useEffect(() => {
//     const followingTweetHandler = async () => {
//       const id = user?._id;
//       try {
//         const res = await axios.get(
//           `${TWEET_API_END_POINT}/followingtweets/${id}`
//         );
//         console.log(res);
//         dispatch(getAllTweets(res.data.tweets));
//         // dispatch(getRefresh());
//         // the refresh gets tweets from
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchMyTweets();
//   }, [refresh]);
// };
// export default useGetMyTweets;

import axios from "axios";
import { TWEET_API_END_POINT } from "../utils/constant";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTweets } from "../redux/tweetSlice";

const useGetMyTweets = (id) => {
  const dispatch = useDispatch();
  // const { refresh } = useSelector((store) => store.tweet);
  const { refresh, isActive } = useSelector((store) => store.tweet);

  const fetchMyTweets = async () => {
    try {
      const res = await axios.get(`${TWEET_API_END_POINT}/alltweets/${id}`, {
        withCredentials: true,
      });
      console.log(res);
      dispatch(getAllTweets(res.data.tweets));
    } catch (error) {
      console.log(error);
    }
  };
  const followingTweetHandler = async () => {
    try {
      axios.defaults.withCredentials = true;
      const res = await axios.get(
        `${TWEET_API_END_POINT}/followingtweets/${id}`
      );
      console.log(res);
      dispatch(getAllTweets(res.data.tweets));
    } catch (error) {
      console.log(error);
    }
  };
  // based on state , for u or following ? we render
  // false pe following
  // true pe for you , all tweets are visible
  useEffect(() => {
    if (isActive) {
      fetchMyTweets();
    } else {
      followingTweetHandler();
    }
  }, [isActive, refresh]);
};
export default useGetMyTweets;
