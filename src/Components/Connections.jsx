/* eslint-disable react/no-unescaped-entities */
import axios from "axios";
import { BASE_URL } from "../Utils/constant";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addConnection } from "../Utils/connectionSlice";

const Connections = () => {
  const dispatch = useDispatch();
  const loggedInUserConnections = useSelector((store) => store.connection);

  const fetchConnection = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/connection", {
        withCredentials: true,
      });
      dispatch(addConnection(res.data.data));
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchConnection();
  }, []);
  if (!loggedInUserConnections) return;

  if (loggedInUserConnections.length === 0)
    return <h1 className="text-center my-10 text-xl">No connection found</h1>;
  return (
    <>
      <div className="  text-center my-10">
        <h1 className="text-bold text-white text-2xl">Connections</h1>

        {loggedInUserConnections.map((connection) => {
          const {
            _id,
            firstName,
            lastName,
            skills,
            about,
            age,
            gender,
            photoUrl,
          } = connection;
          return (
            <div
              key={_id}
              className="flex w-1/2 m-4 p-4 bg-base-300 rounded-lg mx-auto "
            >
              <div>
                <img
                  className="w-20 h-20 rounded-full"
                  src={photoUrl}
                  alt="photo"
                />
              </div>
              <div className="text-left mx-4">
                <h2 className="font-bold text-xl ">
                  {firstName + " " + lastName}
                </h2>
                {age && gender && (
                  <p className="text-orange-300">{age + " " + gender}</p>
                )}
                {skills && <p className="text-green-500"> {skills}</p>}
                <p> {about}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Connections;
