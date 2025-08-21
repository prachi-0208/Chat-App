import React from "react";

import { IoMdArrowBack } from "react-icons/io";
import Avatar from "react-avatar";

import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import useGetProfile from "../hooks/useGetProfile";
import axios from "axios";
import toast from "react-hot-toast";
import { USER_API_END_POINT } from "../utils/constant";
import { followingUpdate } from "../redux/userSlice";

import a from "./a.jpg";
const Profile = () => {
  // const id = "23456sdfgh";

  const { user, profile } = useSelector((store) => store.user);
  // console.log(user?._id);
  const { id } = useParams();
  // useGetProfile(user?._id);
  // this wasss the bugggggggggggggg iidiottttt
  // id was dynamic and secondly
  useGetProfile(id);
  const dispatch = useDispatch();

  // edit profile and follow unfollow

  // for follow and nfollow logic
  // const followAndUnfollowHandler = () => {
  //   // follow ek array me h
  //   if (user.following.includes(id)) {
  //       // then its a follow and we do unfollow
  //     try {
  //       const
  //     } catch (error) {

  //     }
  //   }

  // }

  const followAndUnfollowHandler = async () => {
    if (user.following.includes(id)) {
      try {
        axios.defaults.withCredentials = true;
        const res = await axios.post(`${USER_API_END_POINT}/unfollow/${id}`, {
          id: user?._id,
        });
        console.log(res);
        dispatch(followingUpdate(id));
        // dispatch(getRefresh());
        toast.success(res.data.message);
      } catch (error) {
        toast.error(error.response.data.message);
        console.log(error);
      }
    } else {
      try {
        axios.defaults.withCredentials = true;
        const res = await axios.post(`${USER_API_END_POINT}/follow/${id}`, {
          id: user?._id,
        });
        console.log(res);
        dispatch(followingUpdate(id));
        // dispatch(getRefresh());
        toast.success(res.data.message);
      } catch (error) {
        toast.error(error.response.data.message);
        console.log(error);
      }
    }
  };

  return (
    <div className="w-[50%] border-l border-r border-gray-200">
      <div>
        <div className="flex items-center py-2">
          <Link
            to="/"
            className="p-2 rounded-full hover:bg-gray-100 hover:cursor-pointer"
          >
            <IoMdArrowBack size="24px" />
          </Link>
          <div className="ml-2">
            <h1 className="font-bold text-lg">{profile?.name}</h1>
            <p className="text-gray-500 text-sm">10 post</p>
          </div>
        </div>

        <img
          src="https://pbs.twimg.com/profile_banners/44196397/1690621312/1500x500"
          alt="banner"
        />
        <div className="absolute top-52 ml-2 border-4 border-white rounded-full">
          <Avatar src={`${a}`} size="120" round={true} />
        </div>
        <div className="text-right m-4 ">
          {profile?._id == user?._id ? (
            <button className="px-4 py-1 hover:bg-gray-200 rounded-full border border-gray-400">
              Edit Profile
            </button>
          ) : (
            <button
              onClick={followAndUnfollowHandler}
              className="px-4 py-1 hover:bg-gray-700 bg-black  text-white rounded-full border border-gray-400"
            >
              {/* one more condition here to show that if we already follow a person it wiill be followed else flow */}
              {user.following.includes(id) ? "Following" : "Follow"}
            </button>
          )}
        </div>
        <div className="m-4">
          <h1 className="font-bold text-xl"> {profile?.name} </h1>
          <p>{`@${profile?.username}`}</p>
        </div>
        <div className="m-4 text-sm">
          <p>dfghjkl </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
