# DevTinder
  ## # EPISODE15  Part-1 
-Create a vite+react application
-Remove unnecessary file abd code and create a hello world application
-Install Tailwind CSS
-Install daisyUI
-add Navbar component to app.jsx
-Create a Navbar.jsx component separated component
-install react-router-dom
-Create BrowserRouter > Routes > Route = /Body > RouteChildren
-Create an Outlet component in your body component
-Create a footer
- Learn -daisyUI, tailwind, reactRouter

  ## # EPISODE16  Part-2
-planning -Learn  - creating Authentication flow, 
                - make a api call, 
                - how to manage data, 
                - use redux tool kit,
                -store, dispatch event, use selector subscribe events

## ==========================================

-Body
-navBar
Route =/ =>feed
Route =/login =>Login page
Route =/connection =>Connection page
Route =/Profile =>Profile page

## ==========================================

## Steps

Step01
-Install Vite with react

npm create vite@latest my-vue-app -- --template vue (dummy)
npm create vite@latest <Project Name> -- --template react

Step02
-npm install (on terminal vs code)

Step03
-Install TailwindCSS
installation -->Framework Guides -->Vite -->using react

    -follow steps on tailwind installation
        (a)Install Tailwind CSS
        npm install -D tailwindcss postcss autoprefixer
        npx tailwindcss init -p

        (b)Configure your template paths

Steps 04
pre installation - You need Node.js and Tailwind CSS installed.

npm i -D daisyui@latest
=========================================
import axios from "axios";
import { BASE_URL } from "../Utils/constant";
import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";

const EditProfile = () => {
  // const dispatch = useDispatch();
  // const userDetails = useSelector((store) => store.feed);
  //   const [fn, ln, agee] = userDetails;
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [about, setAbout] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [error, setError] = useState("");
  const updateProfile = async () => {
    //step01 - call api edit update
    try {
      const res = await axios.patch(`${BASE_URL}/profile/edit`, {
        withCredentials: true,
      });
      console.log(res);
      // dispatch(addFeed(res))
    } catch (err) {
      //   console.log(err?.response?.data);
      setError(err?.response?.data);
    }
  };
  useEffect(() => {
    updateProfile();
  }, []);

  return (
    <div className="flex justify-center my-10">
      <div className="card bg-base-300 w-96 shadow-xl ">
        <div className="card-body">
          <h2 className="card-title">Edit Profile</h2>
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
            <input
              type="text"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="input input-bordered w-full max-w-xs"
            />
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
          <p className="text-rose-500">{error}</p>
          <div className="card-actions justify-center my-3">
            <button className="btn btn-secondary">Interested</button>
            <button className="btn btn-primary"> Ignored</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;

// //
// <div>
//       <div className="flex justify-center my-10 mb-10">
//         <div className="card bg-base-300 text-neutral-content w-96 ">
//           <div className="card-body items-center text-center">
//             <h2 className="carditle">Edit Profile</h2>
//             <div className="w-72 ">

//             </div>
//             <p className="text-rose-500">{error}</p>
//             <div className="card-actions justify-end">
//               <button className="btn btn-primary">Save</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>

