/* eslint-disable no-unused-vars */
import { Outlet, useNavigate } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { BASE_URL } from "../Utils/constant";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../Utils/userSlice";
import { useEffect } from "react";

//when goto "/" means body  show deatils logged in user
const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((store) => store.user);

  //fetch/read user data from /profile/view api
  const fetchUser = async () => {
    try {
      const res = await axios.get(BASE_URL + "/profile/view", {
        withCredentials: true,
      });
      //after get res back stre details in redux store
      dispatch(addUser(res.data));
      // console.log(res.data);
      // return navigate("/");
    } catch (err) {
      //handle authentication error
      if (err.status === 401) {
        navigate("/login");
      }
      //make error page and redirect their for other error
      console.log(err);
    }
  };
  useEffect(() => {
    if (!userData) {
      fetchUser();
    }
  }, []);

  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Body;
