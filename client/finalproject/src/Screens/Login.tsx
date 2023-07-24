import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Componants/navbar";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  function signInUser() {
    axios
      .post("http://localhost:4000/signin", { email: username, password })
      .then(async (res: any) => {
        console.log("res signin===", res);
        // userContext.setUserID(username);
        if(!!res && res.status === 200){
          await localStorage.setItem("username", username);
          navigate("/home");
        } 
        else {
          alert("Invalid username or password");
        }
      })
      .catch((error) => {
        console.log("error while api calling", error);
        alert("Invalid username or password");
      });
  }

    return (
      <>
      <Navbar />
        <div className="flex justify-center items-center h-screen">
          <form className="bg-white p-10 rounded-lg shadow-md max-w-sm w-full">
            <h2 className="text-2xl font-medium mb-5">Login</h2>
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
                value={username}
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
                value={password}
                placeholder="Password"
                onChange={(t) => setPassword(t.target.value)}
              />
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={() => signInUser()}
            >
              Login
            </button>
          </form>
        </div>
      </>
    );
  }

export default Login;
