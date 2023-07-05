import React from 'react';
import Navbar from '../Componants/navbar';


const AboutPage = () => {
  return (
    <div className="bg-white-500 min-h-screen">
        <Navbar />
      <div className="container mx-auto py-8">
        <h1 className="text-4xl text-black text-center font-bold mb-8">About Us</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* About Section 1 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <img src={"https://godirecttransfers.co.uk/wp-content/uploads/2021/03/goCarsHero.svg"} alt="About Us 1" className="w-full h-auto rounded-lg mb-6" />
            <h2 className="text-2xl text-blue-500 font-bold mb-4">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">At our rideshare company, we are dedicated to providing safe, reliable, and convenient transportation services to our customers. We aim to reduce traffic congestion, promote carpooling, and make commuting easier for everyone.</p>
          </div>
          
          {/* About Section 2 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <img src={"https://godirecttransfers.co.uk/wp-content/uploads/2021/03/goCarsHero.svg"} alt="About Us 2" className="w-full h-auto rounded-lg mb-6" />
            <h2 className="text-2xl text-blue-500 font-bold mb-4">Our Vision</h2>
            <p className="text-gray-700 leading-relaxed">We envision a future where transportation is sustainable and accessible to all. Through innovative technology and collaborative partnerships, we strive to revolutionize the way people travel and contribute to a greener environment.</p>
          </div>
          
          {/* About Section 3 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <img src={"https://godirecttransfers.co.uk/wp-content/uploads/2021/03/goCarsHero.svg"} alt="About Us 3" className="w-full h-auto rounded-lg mb-6" />
            <h2 className="text-2xl text-blue-500 font-bold mb-4">Why Choose Us?</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li className="mb-2">Reliable and punctual service</li>
              <li className="mb-2">Competitive pricing and transparent fares</li>
              <li className="mb-2">Convenient booking and tracking options</li>
              <li className="mb-2">Safe and comfortable rides</li>
              <li className="mb-2">Efficient customer support</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
