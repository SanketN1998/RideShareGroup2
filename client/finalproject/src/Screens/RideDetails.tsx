import React from 'react'
import Navbar from '../Componants/navbar'
import { useLocation } from 'react-router-dom'

function RideDetails() {
  const location = useLocation();
  console.log(location.state);
  let rideData = location.state;
  return (
    <>
    <Navbar />
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-md bg-white shadow-md rounded-md p-6">
        <h2 className="text-2xl font-bold mb-4">Ride Details</h2>
        <div className="mb-4">
          <p className="text-gray-700 font-semibold">From: {rideData.from}</p>
        </div>
        <div className="mb-4">
          <p className="text-gray-700 font-semibold">To: {rideData.to}</p>
        </div>
        <div className="mb-4">
          <p className="text-gray-700 font-semibold">Date: {rideData.date}</p>
        </div>
        <div className="mb-4">
          <p className="text-gray-700 font-semibold">Time: {rideData.time}</p>
        </div>
        <div className="mb-4">
          <p className="text-gray-700 font-semibold">Seats Available: {rideData.seats}</p>
        </div><div className="mb-4">
          <p className="text-gray-700 font-semibold">Price: {rideData.price}y</p>
        </div><div className="mb-4">
          <p className="text-gray-700 font-semibold">Pick up: {rideData.pickupLoc}</p>
        </div><div className="mb-4">
          <p className="text-gray-700 font-semibold">Drop Off: {rideData.dropOffLoc}</p>
        </div><div className="mb-4">
          <p className="text-gray-700 font-semibold">Driver Id: {rideData.userId}</p>
        </div>
        {/* Add more details as needed */}
      </div>
    </div>
    </>
  )
}

export default RideDetails