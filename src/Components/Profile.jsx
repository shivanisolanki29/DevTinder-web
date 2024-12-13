/* eslint-disable no-unused-vars */

import { useSelector } from "react-redux";
import EditProfile from "./EditProfile";

const Profile = () => {
  const userCurrent = useSelector((store) => store.user);

  return userCurrent && <div>{<EditProfile user={userCurrent} />}</div>;
};

export default Profile;
