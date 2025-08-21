// export const USER_API_END_POINT = "http://localhost:8080/api/v1/user";
// export const TWEET_API_END_POINT = "http://localhost:8080/api/v1/tweet";

// Updated API endpoints for the deployed backend
export const USER_API_END_POINT =
  "https://chatter-nine-ochre.vercel.app/api/v1/user";
export const TWEET_API_END_POINT =
  "https://chatter-nine-ochre.vercel.app/api/v1/tweet";

// backend me login wala

// time of post

export const timeSince = (timestamp) => {
  let time = Date.parse(timestamp);
  let now = Date.now();
  let secondsPast = (now - time) / 1000;
  let suffix = "ago";

  let intervals = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60,
    second: 1,
  };

  for (let i in intervals) {
    let interval = intervals[i];
    if (secondsPast >= interval) {
      let count = Math.floor(secondsPast / interval);
      return `${count} ${i} ${count > 1 ? "s" : ""} ${suffix}`;
    }
  }
};
