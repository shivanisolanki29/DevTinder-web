/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// const

import axios from "axios";
import { BASE_URL } from "../Utils/constant";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeUserFromFeed } from "../Utils/feedSlice";

const UserCard = ({ user }) => {
  const { _id, firstName, lastName, about, age, gender, photoUrl } = user;
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const handleSendRequest = async (status, userId) => {
    try {
      const res = await axios.post(
        BASE_URL + "/request/send/" + status + "/" + userId,
        {},
        { withCredentials: true }
      );
      //remove from feed after send req
      dispatch(removeUserFromFeed(userId));
    } catch (err) {
      setError(err?.response?.data || "Something went wrong");
    }
  };

  return (
    <div>
      <p className="text-rose-500">{error}</p>
      <div className="card bg-base-300 w-96 shadow-xl">
        <figure>
          <img className="px-1" src={photoUrl} alt="user" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{firstName + " " + lastName}</h2>
          {age && gender && <p>{age + " " + gender}</p>}
          <p>{about}</p>
          <div className="card-actions justify-center my-4">
            <button
              className="btn btn-secondary"
              onClick={() => handleSendRequest("interested", _id)}
            >
              Interested
            </button>
            <button
              className="btn btn-primary"
              onClick={() => handleSendRequest("ignored", _id)}
            >
              Ignored
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
