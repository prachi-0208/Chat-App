import React from "react";

import { CiSearch } from "react-icons/ci";
import Avatar from "react-avatar";
import { Link } from "react-router-dom";

const RightSidebar = ({ otherUsers }) => {
  // // Check if otherUsers is an array
  // if (!Array.isArray(otherUsers)) {
  //   // If otherUsers is not an array, return null or any other fallback component
  //   return null;
  // }
  return (
    <div className="w-[20%]">
      <div className="flex items-center p-2 bg-gray-100 rounded-full outline-none w-full">
        <CiSearch size="20px" />
        <input
          type="text"
          className="bg-transparent outline-none px-2"
          placeholder="Search"
        />
      </div>

      {/* who to follow..... i am sooooo done */}
      <div className="p-4 bg-gray-100 rounded-2xl my-4">
        <h1 className="font-bold text-lg">Who to follow o.o </h1>

        {/* now to display other users */}

        {otherUsers?.map((user) => {
          return (
            <div
              key={user?._id}
              className="flex items-center my-3 justify-between"
            >
              <div className="flex">
                <div>
                  <Avatar
                    src="https://pbs.twimg.com/profile_images/1769836151823581184/5K2U8bIZ_400x400.png"
                    size="40"
                    round={true}
                  />
                </div>
                <div className="ml-2">
                  <h1 className="font-bold">{user?.name}</h1>
                  <p className="text-sm">{user?.username}</p>
                </div>
              </div>

              <Link to={`/profile/${user?._id}`}>
                <button className="px-4 py-1 bg-black text-white rounded-full">
                  Profile
                </button>
              </Link>
            </div>
          );
        })}
      </div>

      {/* aanother part */}

      {/* last divvvvvvvvvvvvvvv */}
    </div>
  );
};

export default RightSidebar;
