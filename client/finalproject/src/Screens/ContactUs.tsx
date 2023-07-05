import React,{useState} from 'react';
import Navbar from '../Componants/navbar';
import axios from 'axios';

let contactObj = {
  name: "",
  email: "",
  message: "",
  userId: ""
}

const ContactUsPage = () => {
  const [contact, setcontact] = useState(contactObj);
  React.useEffect(() => {
    const username = localStorage.getItem("username");
    console.log("username", username);
    if (!!username) {
      contact.userId = username;
      setcontact(contact);
    }
  }, []);
  function onSubmitPress () {
    console.log("contact",contact)
    axios.post('http://localhost:4000/contact', contact)
    .then(function (response) {
      console.log("response", response);
      if(response.status === 200) {
        alert("Message Sent Successfully")
      }
    }
    )
    .catch(function (error) {
      console.log("error", error);
    }
    );
  }
  return (
    <div className="bg-gray-100 min-h-screen">
        <Navbar />
      <div className="container mx-auto py-8">
        <h1 className="text-3xl text-center font-bold mb-8">Contact Us</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Contact Image */}
          <img src={"https://godirecttransfers.co.uk/wp-content/uploads/2021/03/goCarsHero.svg"} alt="Contact Us" className="w-full h-auto rounded-lg mb-6 sm:mb-0" />
          
          {/* Contact Form */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
                <input type="text" id="name" onChange={(e) => {
                  contact.name = e.target.value
                  setcontact(contact);
                } } className="w-full bg-gray-200 appearance-none border-2 border-gray-200 rounded-lg py-2 px-4 focus:outline-none focus:bg-white focus:border-blue-500" />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                <input type="email" id="email" onChange ={(e)=>{
                  contact.email = e.target.value
                  setcontact(contact);
                }} className="w-full bg-gray-200 appearance-none border-2 border-gray-200 rounded-lg py-2 px-4 focus:outline-none focus:bg-white focus:border-blue-500" />
              </div>
              
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
                <textarea id="message" onChange={(e)=> {
                   contact.message = e.target.value
                   setcontact(contact);
                }} className="w-full bg-gray-200 appearance-none border-2 border-gray-200 rounded-lg py-2 px-4 h-32 resize-none focus:outline-none focus:bg-white focus:border-blue-500"></textarea>
              </div>
              
              <div>
                <button type="submit" onClick={onSubmitPress} className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg focus:outline-none hover:bg-blue-600">Send Message</button>
              </div>
            </>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUsPage;
