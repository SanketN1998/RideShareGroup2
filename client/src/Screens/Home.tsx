import React, { useState } from "react";
import Navbar from "../Componants/navbar";
import { UserContext } from "../Constants/context";
import axios from "axios";
import Search from "../Componants/Search";

function Home() {
  const userContext = React.useContext(UserContext);
  const [posts, setposts] = useState([])
  console.log("userContext", userContext);
  function getPostData() {
    axios.get("http://localhost:4000/posts")
    .then(function (response) {
      setposts(response.data);
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
          />
        ))}
      </div>
    </div>
    </>
  );
}
const ProductCard = ({post}:any) => {
  return (
    <div className="flex items-center mb-4 bg-white shadow-lg rounded-lg overflow-hidden">
    <img className="rounded-full m-3" src={require('../Images/user.jpg')} alt={"Test"} style={{height:120, width: 120}} />
    <div className="py-4 px-6">
      <h2 className="text-lg font-bold text-gray-800">{post.from + "\xa0to\xa0" + post.to}</h2>
      <p className="mt-2 text-base text-gray-600">Seats Available : {post.seats}</p>
      <p className="mt-2 text-base text-gray-600">Price Per Seat: {post.price}</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3 w-100">Book</button>
    </div>
  </div>
  );
};
export default Home;
