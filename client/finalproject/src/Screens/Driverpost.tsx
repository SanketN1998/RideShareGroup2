import React from "react";
import Navbar from "../Componants/navbar";
import { DriverPostInt } from "../Interface/interface";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
const driverPost = {
  from: "",
  to: "",
  date: "",
  time: "",
  seats: "",
  pickupLoc: "",
  dropOffLoc: "",
  price: "",
  userId: ""
};
function DriverPost() {
  const navigate = useNavigate();
  const [driverPostObj, setDriverPostObj] = React.useState<DriverPostInt>(driverPost);
  React.useEffect(() => {
    const username = localStorage.getItem("username");
    console.log("username", username);
    if (!!username) {
      driverPost.userId = username;
      setDriverPostObj(driverPost);
    }
  }, []);

  function onSubmitPress() {
    console.log(driverPostObj);
    axios.post('http://localhost:4000/driverpost', driverPostObj)
    .then(function (response) {
      console.log("response", response);
      if(response.status === 200) {
        navigate('/home');
      }
    })
    .catch(function (error) {
      console.log("error", error);
    });
  }
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center mb-4">
        <div
          className="bg-white shadow-lg rounded-lg p-6 max-w"
          style={{ width: 500, marginTop: 20 }}
        >
          <div>
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="from"
            >
              From:
            </label>
            <input
              className="w-full border border-gray-300 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
              id="from"
              type="text"
              placeholder="Enter from location"
              onChange={(t) => {
                driverPostObj.from = t.target.value;
                setDriverPostObj(driverPostObj);
              }}
            />
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="to">
              To:
            </label>
            <input
              className="w-full border border-gray-300 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
              id="to"
              type="text"
              placeholder="Enter to location"
              onChange={(t) => {
                driverPostObj.to = t.target.value;
                setDriverPostObj(driverPostObj);
              }}
            />
          </div>
          <div>
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="date"
            >
              Date:
            </label>
            <input
              className="w-full border border-gray-300 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
              id="date"
              type="date"
              onChange={(t) => {
                driverPostObj.date = t.target.value;
                setDriverPostObj(driverPostObj);
              }}
            />
          </div>
          <div>
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="time"
            >
              Time:
            </label>
            <input
              className="w-full border border-gray-300 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
              id="time"
              type="time"
              onChange={(t) => {
                driverPostObj.time = t.target.value;
                setDriverPostObj(driverPostObj);
              }}
            />
          </div>
          <div>
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="seats"
            >
              seats:
            </label>
            <input
              className="w-full border border-gray-300 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
              id="seats"
              type="number"
              placeholder="Enter available seats"
              onChange={(t) => {
                driverPostObj.seats = t.target.value;
                setDriverPostObj(driverPostObj);
              }}
            />
          </div>{" "}
          <div>
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="pickup"
            >
              Pickup Location:
            </label>
            <input
              className="w-full border border-gray-300 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
              id="pickup"
              type="text"
              placeholder="Enter to pickup location"
              onChange={(t) => {
                driverPostObj.pickupLoc = t.target.value;
                setDriverPostObj(driverPostObj);
              }}
            />
          </div>{" "}
          <div>
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="dropoff"
            >
              Drop off Location:
            </label>
            <input
              className="w-full border border-gray-300 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
              id="dropoff"
              type="text"
              placeholder="Enter to drop off location"
              onChange={(t) => {
                driverPostObj.dropOffLoc = t.target.value;
                setDriverPostObj(driverPostObj);
              }}
            />
          </div>{" "}
          <div>
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="priceperseat"
            >
              Price per Seat
            </label>
            <input
              className="w-full border border-gray-300 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
              id="priceperseat"
              type="number"
              placeholder="Enter Price Per Seat"
              onChange={(t) => {
                driverPostObj.price = t.target.value;
                setDriverPostObj(driverPostObj);
              }}
            />
          </div>
          <div className="flex justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              type="submit"
              onClick={() => onSubmitPress()}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DriverPost;
