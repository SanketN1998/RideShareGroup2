import React from 'react'
import Navbar from '../Componants/navbar';
import { RideRequestInt } from '../Interface/interface';
import axios from 'axios';

const driverPost = {
  from: "",
  to: "",
  date: "",
  time: "",
  userId: ""
};
function RideRequest() {
  const [driverPostObj, setDriverPostObj] = React.useState<RideRequestInt>(driverPost);
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
    axios.post('http://localhost:4000/ridereq', driverPostObj)
    .then(function (response) {
      console.log("response", response);
      if(response.status === 200) {
        console.log("ride req response",response)
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
        <div className="flex justify-center mt-2">
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
  )
}

export default RideRequest