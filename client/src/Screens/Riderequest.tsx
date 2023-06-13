import React from 'react'
import Navbar from '../Componants/navbar';

function RideRequest() {
  return (
    <div>
    <Navbar />
    <h1 className="text-3xl text-center font-bold mt-5">Request a Ride</h1>
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
          />
        </div>
        <div className="flex justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white mt-4 font-bold py-2 px-4 rounded"
            type="submit"
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