import React from 'react'
import Navbar from '../Componants/navbar'

function Services() {
  return (
    <div className="bg-gray-100 min-h-screen">
        <Navbar />
    <div className="container mx-auto py-8">
      <h1 className="text-3xl text-center font-bold mb-8">Our Services</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Service Card 1 */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <img src={"https://media.istockphoto.com/id/1217653245/photo/happy-driver-transporting-a-woman-in-a-car.jpg?s=612x612&w=0&k=20&c=TQTuol-ffnuw01NhvlaGiHKqAw7zvfM1F7wJBYAO8l8="} alt="Ride Sharing" className="mb-4 rounded-lg" />
          <h2 className="text-xl font-bold mb-2">Ride Sharing</h2>
          <p className="text-gray-700">Enjoy affordable and convenient rides with our ride-sharing service. Connect with nearby drivers and reach your destination quickly.</p>
        </div>
        
        {/* Service Card 2 */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <img src={"https://static.vecteezy.com/system/resources/previews/000/143/153/original/carpool-vector.jpg"} alt="Car Pooling" className="mb-4 rounded-lg" />
          <h2 className="text-xl font-bold mb-2">Car Pooling</h2>
          <p className="text-gray-700">Reduce traffic congestion and save money by sharing rides with others heading in the same direction. Carpooling is an eco-friendly and cost-effective option.</p>
        </div>
        
        {/* Service Card 3 */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <img src={"https://godirecttransfers.co.uk/wp-content/uploads/2021/03/goCarsHero.svg"} alt="Airport Transfers" className="mb-4 rounded-lg" />
          <h2 className="text-xl font-bold mb-2">Airport Transfers</h2>
          <p className="text-gray-700">Make your travel to and from the airport hassle-free with our dedicated airport transfer service. Arrive at your destination on time and in style.</p>
        </div>
        
        {/* Add more service cards here */}
      </div>
    </div>
  </div>
  )
}

export default Services