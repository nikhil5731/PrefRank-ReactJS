import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import { collection, query, where, getDocs, addDoc } from "firebase/firestore";
import { FirebaseDB } from "../firebaseConfig";

const Home = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    jee: "",
    quota: "",
    category: "",
    air: "",
  });

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setData({ ...data, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const usersRef = collection(FirebaseDB, "users");
      const q = query(usersRef, where("email", "==", data.email));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        // If no matching documents are found, add the new document
        await addDoc(usersRef, {
          name: data.name,
          email: data.email,
        });
        console.log("Success!");
      }
    } catch (error) {
      alert("Error Occurred!");
    }
  };
  return (
    <div className="bg-image lg:h-screen w-screen flex flex-col gap-10 lg:gap-0 lg:flex-row justify-between py-10 px-8 lg:px-16">
      <div className="h-fit lg:w-1/2">
        <img src={Logo} alt="" className="m-auto lg:m-0 w-32 lg:w-48 h-fit" />
      </div>
      <div className="w-full lg:w-1/2">
        <h3 className="text-3xl lg:text-5xl text-center w-full lg:w-[75%] m-auto">
          Fill the details and leave rest to us
        </h3>
        <form
          className="px-5 py-5 flex flex-col gap-4 bg-[#C4DAFF] border border-gray-500 drop-shadow-2xl rounded-xl w-[100%] lg:w-[70%] m-auto mt-5"
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className="flex justify-between gap-4 w-full">
            <div className="flex flex-col w-full">
              <span className=" text-[#334C8A] font-semibold text-xl">
                Name:
              </span>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className=" rounded-lg p-2 h-[3rem] outline-none w-full"
                onChange={handleOnChange}
              />
            </div>
            <div className="flex flex-col w-full">
              <span className=" text-[#334C8A] font-semibold text-xl">
                Email ID:
              </span>
              <input
                type="email"
                name="email"
                placeholder="Email Id"
                className=" rounded-lg p-2 h-[3rem] outline-none w-full"
                onChange={handleOnChange}
              />
            </div>
          </div>
          <div className="flex justify-between gap-4">
            <div className="flex flex-col w-full">
              <span className=" text-[#334C8A] font-semibold text-xl">
                JEE:
              </span>
              <input
                type="text"
                name="jee"
                placeholder="JEE"
                className=" rounded-lg p-2 h-[3rem] outline-none"
                onChange={handleOnChange}
              />
            </div>
          </div>
          <div className="flex justify-between gap-4">
            <div className="flex flex-col w-full">
              <span className=" text-[#334C8A] font-semibold">
                Quota{" "}
                <span className="text-sm font-thin">(for JEE main only:)</span>:
              </span>
              <input
                type="text"
                name="quota"
                placeholder="Name"
                className=" rounded-lg p-2 h-[3rem] outline-none w-full"
                onChange={handleOnChange}
              />
            </div>
            <div className="flex flex-col w-full">
              <span className=" text-[#334C8A] font-semibold">Category:</span>
              <input
                type="text"
                name="category"
                placeholder="Category"
                className=" rounded-lg p-2 h-[3rem] outline-none w-full"
                onChange={handleOnChange}
              />
            </div>
          </div>
          <div className="flex justify-between gap-4">
            <div className="flex flex-col w-full">
              <span className=" text-[#334C8A] font-semibold text-xl">
                AIR:
              </span>
              <input
                type="text"
                name="air"
                placeholder="AIR"
                className=" rounded-lg p-2 h-[3rem] outline-none"
                onChange={handleOnChange}
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-[#334C8A] text-white p-5 w-full lg:w-[70%] md:w-[80%] m-auto rounded-full text-xl"
          >
            Predict College
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;
