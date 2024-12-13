/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import axios from "axios";
import { useState } from "react";
import { BASE_URL } from "../Utils/constant";
import UserCard from "./UserCard";
import { useDispatch } from "react-redux";
import { addFeed } from "../Utils/feedSlice";
import { addUser } from "../Utils/userSlice";

const EditProfile = ({ user }) => {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [age, setAge] = useState(user.age);
  const [gender, setGender] = useState(user.gender);
  const [about, setAbout] = useState(user.about);
  const [photoUrl, setPhotoUrl] = useState(user.photoUrl);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const [showToast, setShowToast] = useState(false);

  const saveProfile = async () => {
    setError("");
    try {
      const res = await axios.patch(
        BASE_URL + "/profile/edit",
        { firstName, lastName, age, gender, photoUrl, about },
        {
          withCredentials: true,
        }
      );
      dispatch(addUser(res?.data?.data));
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    } catch (err) {
      setError(err?.response?.data);
    }
  };

  return (
    user && (
      <>
        <div className="flex justify-center my-10">
          <div className="flex justify-center mx-10 ">
            <div className="card bg-base-300 w-96 shadow-xl pb-12">
              <div className="card-body ">
                <h2 className="card-title mx-20">Edit Profile</h2>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">First Name:</span>
                  </div>
                  <input
                    type="text"
                    className="input input-bordered w-full max-w-xs"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </label>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">LastName</span>
                  </div>
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="input input-bordered w-full max-w-xs"
                  />
                </label>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">photoUrl :</span>
                  </div>
                  <input
                    type="text"
                    value={photoUrl}
                    onChange={(e) => setPhotoUrl(e.target.value)}
                    className="input input-bordered w-full max-w-xs"
                  />
                </label>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">age :</span>
                  </div>
                  <input
                    type="text"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className="input input-bordered w-full max-w-xs"
                  />
                </label>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">gender :</span>
                  </div>

                  <div className="dropdown dropdown-end">
                    <input
                      type="text"
                      value={gender}
                      // placeholder="select an option"
                      onChange={(e) => setGender(e.target.value)}
                      className="input input-bordered w-full max-w-xs"
                    />
                  </div>
                </label>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">about :</span>
                  </div>
                  <input
                    type="text"
                    value={about}
                    onChange={(e) => setAbout(e.target.value)}
                    className="input input-bordered w-full max-w-xs"
                  />
                </label>
              </div>
              <p className="text-rose-500">{error}</p>
              <div className="card-actions justify-center">
                <button className="btn btn-primary" onClick={saveProfile}>
                  Save Profile
                </button>
              </div>
            </div>
          </div>
          <UserCard
            user={{ firstName, lastName, about, age, gender, photoUrl }}
          />
        </div>

        {showToast && (
          <div className="toast toast-top toast-center">
            <div className="alert alert-success">
              <span>Profile saved successfully.</span>
            </div>
          </div>
        )}
      </>
    )
  );
};

export default EditProfile;
