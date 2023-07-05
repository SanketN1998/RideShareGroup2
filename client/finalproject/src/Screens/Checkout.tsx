import React from 'react'

function Checkout() {
  return (
    <div className="bg-gray-900 py-8 sm:py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg mx-auto">
        <h2 className="text-2xl font-bold text-white mb-4">Checkout</h2>
        <form>
          <div className="bg-gray-800 rounded-lg overflow-hidden">
            <div className="px-6 py-4">
              <label className="block text-white font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Enter your name"
              />
            </div>
            <div className="px-6 py-4">
              <label className="block text-white font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="px-6 py-4">
              <label className="block text-white font-bold mb-2" htmlFor="cardNumber">
                Card Number
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="cardNumber"
                type="text"
                placeholder="Enter your card number"
              />
            </div>
            <div className="px-6 py-4">
              <label className="block text-white font-bold mb-2" htmlFor="expiryDate">
                Expiry Date
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="expiryDate"
                type="text"
                placeholder="MM / YY"
              />
            </div>
            <div className="px-6 py-4">
              <label className="block text-white font-bold mb-2" htmlFor="cvv">
                CVV
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="cvv"
                type="text"
                placeholder="Enter your CVV"
              />
            </div>
          </div>
          <button
            type="submit"
            className="mt-6 bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Pay Now
          </button>
        </form>
      </div>
    </div>
  </div>
  )
}

export default Checkout