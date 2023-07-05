import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Screens/Login";
import Home from "./Screens/Home";
import Checkout from "./Screens/Checkout";
import DriverPost from "./Screens/Driverpost";
import Services from "./Screens/Services";
import AboutPage from "./Screens/About";
import ContactUsPage from "./Screens/ContactUs";
import Profile from "./Screens/Profile";
import { UserContext } from "./Constants/context";
import React from "react";
import SignUp from "./Screens/Signup";
import RideRequest from "./Screens/Riderequest";
import RideDetails from "./Screens/RideDetails";

function App() {
  const [userID, setUserID] = React.useState<string | null>(null);
  return (
  <UserContext.Provider value={{ userID, setUserID }}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/checkout" element={<Checkout /> } />
        <Route path="/DriverPost" element={<DriverPost /> } />
        <Route path="/services" element ={<Services />} />
        <Route path="/about" element ={<AboutPage />} />
        <Route path="/contact" element ={<ContactUsPage />} />
        <Route path="/profile" element ={<Profile />} />
        <Route path="/login" element ={<Login />} />
        <Route path="/request_ride" element ={<RideRequest />} />
        <Route path="/ridedetail" element ={<RideDetails />} />
      </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
