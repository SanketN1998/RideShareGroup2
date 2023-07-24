import React, { ChangeEvent, useState } from "react";
import Navbar from "../Componants/navbar";
import axios from "axios";

function Profile() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [surname, setSurname] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [address, setAddress] = useState("");
  const [profilePic, setProfilePic] = useState<Object | null>({});
  const [userId, setUserId] = useState<String | null>("");
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [userProfileData, setuserProfileData] = useState<any>();

  console.log("selectedImage", selectedImage);

  const handleImageChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        console.log("image==",reader.result)
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    let userObj = {
      name,
      age,
      surname,
      birthdate,
      address,
      profilePic: selectedImage,
    };
    axios
      .put(`http://localhost:4000/users/update/${userId}`, userObj)
      .then((res) => {
        console.log("res update", res);
        if (res.status == 200) {
          alert("Profile updated successfully");
          setuserProfileData(res.data);
        }
      });
  };
  const getProfile = (username: any) => {
    axios.get(`http://localhost:4000/user/${username}`).then((res) => {
      console.log("res update", res);
      if (res.status == 200) {
        let { name, age, surname, birthdate, address, profilePic } = res.data;
        setuserProfileData(res.data);
        setSelectedImage(profilePic);
        setName(name);
        setAge(age);
        setSurname(surname);
        setBirthdate(birthdate);
        setAddress(address);
      }
    });
  };
  React.useEffect(() => {
    const username = localStorage.getItem("userId");
    console.log("userId", username);
    setUserId(username);
    getProfile(username);
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-screen items-center">
        <div className="w-full max-w-md">
          <label className="w-full items-center bg-red self-center flex justify-center">
            {selectedImage ||
            (!!userProfileData && userProfileData?.profilePic) ? (
              <img
                src={selectedImage || userProfileData?.profilePic}
                alt="Selected profile"
                className="object-cover w-32 h-32 rounded"
              />
            ) : (
              <div>
                <img
                  src={require("../Assets/Images/user.png")}
                  alt="Selected profile"
                  className="object-cover w-full h-full"
                />
              </div>
            )}
            <input
              type="file"
              accept="image/*"
              className="sr-only"
              onChange={handleImageChange}
            />
          </label>
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded px-8 py-6"
          >
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Name
              </label>
              {!!userProfileData && userProfileData?.name ? (
                <label
                  htmlFor="name"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  {userProfileData?.name}
                </label>
              ) : (
                <input
                  type="text"
                  id="name"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              )}
            </div>
            <div className="mb-4">
              {!!userProfileData && userProfileData?.age ? (
                <>
                  <label
                    htmlFor="age"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Age
                  </label>
                  <label
                    htmlFor="age"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    {userProfileData?.age}
                  </label>
                </>
              ) : (
                <>
                  <label
                    htmlFor="age"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Age
                  </label>
                  <input
                    type="number"
                    id="age"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter your age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                  />
                </>
              )}
            </div>
            <div className="mb-4">
              {!!userProfileData && userProfileData?.age ? (
                <>
                  <label
                    htmlFor="surname"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Surname
                  </label>
                  <label
                    htmlFor="surname"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    {userProfileData?.surname}
                  </label>
                </>
              ) : (
                <>
                  <label
                    htmlFor="surname"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Surname
                  </label>
                  <input
                    type="text"
                    id="surname"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter your surname"
                    value={surname}
                    onChange={(e) => setSurname(e.target.value)}
                  />
                </>
              )}
            </div>
            <div className="mb-4">
              {!!userProfileData && userProfileData?.birthdate ? (
                <>
                  <label
                    htmlFor="birthdate"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Birthdate
                  </label>
                  <label
                    htmlFor="birthdate"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    {userProfileData?.birthdate}
                  </label>
                </>
              ) : (
                <>
                  <label
                    htmlFor="birthdate"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Birthdate
                  </label>
                  <input
                    type="date"
                    id="birthdate"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter your birthdate"
                    value={birthdate}
                    onChange={(e) => setBirthdate(e.target.value)}
                  />
                </>
              )}
            </div>
            <div className="mb-4">
              {!!userProfileData && userProfileData?.address ? (
                <>
                  <label
                    htmlFor="address"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Address
                  </label>
                  <label
                    htmlFor="address"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    {userProfileData?.address}
                  </label>
                </>
              ) : (
                <>
                  <label
                    htmlFor="address"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Address
                  </label>
                  <textarea
                    id="address"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus shadow-outline"
                    placeholder="Enter your address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  ></textarea>
                </>
              )}
            </div>

            <div className="flex items-center justify-center">
              <button
                type="submit"
                disabled = {!!userProfileData ? true: false}
                className={`${!!userProfileData ? "bg-gray-500" : "bg-blue-500 hover:bg-blue-700" } text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full`}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Profile;
