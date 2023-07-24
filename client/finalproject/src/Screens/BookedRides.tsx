import React,{useEffect, useState} from "react";
import Navbar from "../Componants/navbar";
import axios from "axios";

function BookedRides() {
    const [bookingData, setBookingData] = useState<Array<any>>([])
    async function getBookedRides(){
        const username = await localStorage.getItem("username");
        // API call to get booked rides
        const response = await axios.get(`http://localhost:4000/getbookrides/${username}`);
        console.log(response);
        setBookingData([...bookingData,response]);

    }
    useEffect(()=>{
        getBookedRides();
    },[])
  return (
    <div>
      <Navbar />
      <h1>Booked Rides</h1>
      {/* List of bookings will be displayed here */}
      <div className="flex items-center mb-4 bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          className="rounded-full m-3"
          src={require("../Images/user.jpg")}
          alt={"Test"}
          style={{ height: 120, width: 120 }}
        />
        <div className="py-4 px-6">
          <h2 className="text-lg font-bold text-gray-800">{"Test"}</h2>
          <p className="mt-2 text-base text-gray-600">Seats Available : 99</p>
          <p className="mt-2 text-base text-gray-600">Price Per Seat: 99 </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3 w-100 ml-2">
            View
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookedRides;
