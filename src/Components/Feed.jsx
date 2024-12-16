/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../Utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../Utils/feedSlice";
import UserCard from "./UserCard";
import fireImage from "../Image/fireImage.png";

const Feed = () => {
  const feed = useSelector((store) => store.feed);
  const dispatch = useDispatch();

  const getFeed = async () => {
    // if (feed) return;
    const res = await axios.get(`${BASE_URL}/feed`, {
      withCredentials: true,
    });
    dispatch(addFeed(res?.data?.data));
  };

  useEffect(() => {
    getFeed();
  }, []);

  if (!feed) return;

  if (feed.length == 0)
    return (
      <div className=" flex flex-col justify-center items-center">
        <img className="w-48" src={fireImage} alt="no user found photo" />

        <h1 className="text-xl text-center my-3">
          There is no one new around you.
        </h1>
      </div>
    );

  return (
    feed && (
      <div className="flex justify-center">
        {/* just take firstuser feed[0] */}
        <UserCard user={feed[0]} />
      </div>
    )
  );
};

export default Feed;
