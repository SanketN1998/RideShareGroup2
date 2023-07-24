import React, { useState, useEffect } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  FacebookAuthProvider,
  GoogleAuthProvider,
} from "firebase/auth";
import { Navigate, useNavigate } from "react-router-dom";
import { app } from "../Constants/firebase";
import axios from "axios";
import Navbar from "../Componants/navbar";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { UserContext } from "../Constants/context";
import Dropdown from "../Componants/dropdown";

const googleProvider = new GoogleAuthProvider();
const userExist = "auth/email-already-in-use";

function SignUp() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isusername, setIsuserName] = useState("");

useEffect(() => {
  getUser();
}, [isusername])


  async function getUser() {
    const username = await localStorage.getItem("username");
    console.log("username", username);
    if (!!username) {
      setIsuserName(username);
    }
  }

  const auth = getAuth(app);

  const userContext = React.useContext(UserContext);

  const handleGoogleSignIn = async () => {
    try {
      const provider = googleProvider;
      await signInWithPopup(auth, provider);
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };

  const handleFacebookSignIn = async () => {
    try {
      const provider = new FacebookAuthProvider();
      await signInWithPopup(auth, provider);
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };
  function registerUser() {
    axios
      .post("http://localhost:4000/users", { email: username, password })
      .then(async (res: any) => {
        // userContext.setUserID(username);
        await localStorage.setItem("username", username);
        await localStorage.setItem("userId", res?.data._id);
        !!res && navigate("/home");
      })
      .catch((error) => {
        console.log("error while api calling", error);
      });
  }
  if (!!isusername) {
    return <Navigate replace to={"/home"} />;
  } else {
    return (
      <>
      <Navbar />
        <GoogleOAuthProvider clientId="169491922766-ltjjg6k7sn0k8t07bfonhpdh0jqo6b8n.apps.googleusercontent.com">
        <div className="flex justify-center items-center h-screen">
          <div className="bg-white p-10 rounded-lg shadow-md max-w-sm w-full">
            <h2 className="text-2xl font-medium mb-5">Register an account</h2>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email"
                onChange={(t) => setUsername(t.target.value)}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Password"
                onChange={(t) => setPassword(t.target.value)}
              />
            </div>
            <div className="mb-8">
              <Dropdown />
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={() => registerUser()}
            >
              Register
            </button>
           <p className="block pt-5 text-gray-700 font-medium mb-2">Already have an account ? <a className="text-blue-700 font-medium mb-2" href="/login">Click here</a></p> 
            {/* <GoogleLogin
              onSuccess={(credentialResponse) => {
                console.log(credentialResponse);
              }}
              onError={() => {
                console.log("Login Failed");
              }}
            /> */}
            <div className="flex row p-2">
            <button
              onClick={() => handleGoogleSignIn()}
              className="flex items-center bg-white-600 text-black font-semibold py-2 px-4 rounded-lg shadow-md border-black"
            >
              <img
                src={
                  "https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Google-512.png"
                }
                alt="Facebook Icon"
                className="w-6 h-6 mr-2"
              />
               Google
            </button>
            <button
              onClick={() => handleFacebookSignIn()}
              className="flex items-center bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 ml-2"
            >
              <img
                src={
                  "https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_facebook-512.png"
                }
                alt="Facebook Icon"
                className="w-6 h-6 mr-2"
              />
              Facebook
            </button>
            </div>
          </div>
        </div>
        </GoogleOAuthProvider>
      </>
    );
  }
}

export default SignUp;
