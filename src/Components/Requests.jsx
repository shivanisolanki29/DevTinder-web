/* eslint-disable react/no-unescaped-entities */
import axios from "axios";
import { BASE_URL } from "../Utils/constant";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRequests, removeRequest } from "../Utils/requestSlice";

/* eslint-disable no-unused-vars */
const Requests = () => {
  const dispatch = useDispatch();
  const requests = useSelector((store) => store.request);

  const fetchRequest = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/requests/received", {
        withCredentials: true,
      });
      dispatch(addRequests(res.data.data));
    } catch (err) {
      console.log(err.message);
    }
  };

  const reviewRequest = async (status, _id) => {
    try {
      const res = await axios.post(
        BASE_URL + "/request/review/" + status + "/" + _id,
        {},
        { withCredentials: true }
      );
      dispatch(removeRequest(_id));
    } catch (err) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    fetchRequest();
  }, []);

  if (!requests) return;
  if (requests.length === 0)
    return <h1 className="text-center my-10 text-xl">No Request Found</h1>;

  return (
    <>
      <div className="text-center my-10">
        <h1 className="text-2xl text-bold text-white">Requests</h1>
        {requests.map((req) => {
          const {
            _id,
            firstName,
            lastName,
            age,
            gender,
            about,
            skills,
            photoUrl,
          } = req.fromUserId;
          return (
            <div
              key={_id}
              className="flex flex-row items-center w-4/5 my-4 p-4 bg-base-300 rounded-lg mx-auto"
            >
              <div className="w-28">
                <img
                  className="w-20 h-20 rounded-full"
                  src={photoUrl}
                  alt="photo"
                />
              </div>
              <div className="text-left mx-4 w-3/4">
                <h2 className="font-bold text-xl">
                  {firstName + " " + lastName}
                </h2>
                {age && gender && (
                  <p className="text-orange-300">{age + " " + gender}</p>
                )}
                <p>{about}</p>
              </div>
              <div className="card-actions justify-center my-4 w-1/4">
                <button
                  className="btn btn-secondary mx-2"
                  onClick={() => reviewRequest("accepted", req._id)}
                >
                  Accept
                </button>
                <button
                  className="btn btn-primary mx-2"
                  onClick={() => reviewRequest("rejected", req._id)}
                >
                  Reject
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Requests;
