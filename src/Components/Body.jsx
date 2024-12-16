/* eslint-disable no-unused-vars */
import { Outlet, useNavigate } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { BASE_URL } from "../Utils/constant";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../Utils/userSlice";
import { useEffect, useState } from "react";

//when goto "/" means body  show deatils logged in user
const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const userData = useSelector((store) => store.user);

  //fetch/read user data from /profile/view api
  const fetchUser = async () => {
    if (userData) return;
    try {
      const res = await axios.get(BASE_URL + "/profile/view", {
        withCredentials: true,
      });
      //after get res back store details in redux store
      dispatch(addUser(res.data));
      // console.log(res.data);
      // return navigate("/");
    } catch (err) {
      //handle authentication error
      if (err.status === 401) {
        navigate("/login");
      }
      //make error page and redirect their for other error
      // console.log(err.message);
      setError(err?.response?.data || "Something went wrong");
    }
  };
  useEffect(() => {
    // if (!userData) {
    fetchUser();
    // }
  }, []);

  return (
    <div>
      <Navbar />
      {/* {error && <p className="text-rose-500 text-center py-3">{error}</p>} */}
      <Outlet />
      <Footer />
    </div>
  );
};

export default Body;
