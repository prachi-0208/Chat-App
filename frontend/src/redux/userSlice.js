import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    otherUsers: null,
    profile: null,
  },
  reducers: {
    getUser: (state, action) => {
      state.user = action.payload;
    },
    getOtherUsers: (state, action) => {
      state.otherUsers = action.payload;
    },
    getMyProfile: (state, action) => {
      state.profile = action.payload;
    },
    // all these refresh the statte ?
    followingUpdate: (state, action) => {
      // id is in follow arr so unfollow
      if (state.user.following.includes(action.payload)) {
        state.user.following = state.user.following.filter((itemId) => {
          return itemId !== action.payload;
        });
      } else {
        // id is not in follow arr so follow
        state.user.following.push(action.payload);
      }
    },
  },
});
export const { getUser, getOtherUsers, getMyProfile, followingUpdate } =
  userSlice.actions;
export default userSlice.reducer;
