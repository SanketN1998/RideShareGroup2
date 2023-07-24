import React, { useState } from "react";
import Navbar from "../Componants/navbar";
import { UserContext } from "../Constants/context";
import axios from "axios";
import Search from "../Componants/Search";
import { useNavigate } from "react-router-dom";

function Home() {
  const userContext = React.useContext(UserContext);
  const [posts, setposts] = useState([])
  const [ridePosts, setRidePosts] = useState([])

  console.log("userContext", userContext);
  async function getPostData() {
    await axios.get("http://localhost:4000/posts")
    .then(function (response) {
      setposts(response.data);
    })
    .catch(function (error) {
      console.log(error);
    })
    await axios.get("http://localhost:4000/rideposts")
    .then(function (response) {
      console.log("dis req ride",response)
      setRidePosts(response.data);
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  React.useEffect(()=>{
    getPostData();
  },[])

  return (
    <>
    <Navbar />
    <Search />
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-4">
        {posts.map((item,index) => (
          <ProductCard
            key={index.toString()}
            post = {item}
            getPostData = {getPostData}
          />
        ))}
      </div>
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Ride Requests</h1>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-4">
          {ridePosts.map((item: any,index) => (
            <div key={index.toString()} className="flex items-center mb-4 bg-white shadow-lg rounded-lg overflow-hidden">
            <img className="rounded-full m-3" src={require('../Images/user.jpg')} alt={"Test"} style={{height:120, width: 120}} />
            <div className="py-4 px-6">
              <h2 className="text-lg font-bold text-gray-800">{item.from + "\xa0to\xa0" + item.to}</h2>
              <p className="mt-2 text-base text-gray-600">Date : {item.date}</p>
              <p className="mt-2 text-base text-gray-600">Time: {item.time}</p>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3 w-100">Book</button>
            </div>
          </div>
          ))}
      </div>
    </div>
    </div>
    </>
  );
}
const ProductCard = ({post, getPostData}:any) => {
  console.log("Post===",post)
  const navigate =  useNavigate();
  let availableSeats  = parseInt(post.seats)
  function bookRides() {
    let newPost =  post;
    newPost.driverId = post.userId;
    axios.post(`http://localhost:4000/bookride`,newPost)
    .then(function (response) {
      console.log("response bookRIde---",response)
    })
    .catch(function (error) {
      console.log(error);
    })
  }
  function onBookClicked () {
    axios.put(`http://localhost:4000/book/${post._id}`,{seats: availableSeats  - 1})
    .then(function (response) {
      console.log("response---",response)
      bookRides();
      getPostData();
    })
    .catch(function (error) {
      console.log(error);
    })
    
  }
  function onViewClicked () {
    navigate('/ridedetail',{state: post })
  }
  return (
    <div className="flex items-center mb-4 bg-white shadow-lg rounded-lg overflow-hidden">
    <img className="rounded-full m-3" src={require('../Images/user.jpg')} alt={"Test"} style={{height:120, width: 120}} />
    <div className="py-4 px-6">
      <h2 className="text-lg font-bold text-gray-800">{post.from + "\xa0to\xa0" + post.to}</h2>
      <p className="mt-2 text-base text-gray-600">Seats Available : {post.seats}</p>
      <p className="mt-2 text-base text-gray-600">Price Per Seat: {post.price}</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3 w-100" onClick={onBookClicked}>Book</button>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3 w-100 ml-2" onClick={onViewClicked}>View</button>
    </div>
  </div>
  );
};
export default Home;
