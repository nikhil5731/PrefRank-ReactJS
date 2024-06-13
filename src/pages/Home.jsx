import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import { collection, query, where, getDocs, addDoc } from "firebase/firestore";
import { FirebaseDB } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import LoadingScreen from "../assets/loadingScreen.mp4";
import axios from "axios";

const Home = ({ setEligibleColleges, isLoading, setIsLoading, setRatings }) => {
  const navigate = useNavigate();
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
    setIsLoading(true);
    e.preventDefault();
    try {
      if (data.name && data.email) {
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
        if (data.jee && data.quota && data.category && data.air) {
          const response = await axios.post(
            `${process.env.REACT_APP_BACKEND_URL}/get-colleges`,
            {
              quota: data.quota,
              categories: data.category,
              rank: data.air,
              jee: data.jee,
            }
          );
          const topColleges = response.data.sort((a, b) => {
            const rating1 = a.overallRating;
            const rating2 = b.overallRating;
            const avg1 = (a.Opening_Rank_2024 + a.Closing_Rank_2024) / 2;
            const avg2 = (b.Opening_Rank_2024 + b.Closing_Rank_2024) / 2;
            const priorityScore1 = rating1 / avg1;
            const priorityScore2 = rating2 / avg2;
            return priorityScore2 - priorityScore1;
          });

          setEligibleColleges(topColleges);
          navigate("/colleges");
        } else {
          alert("Fill the details!");
        }
      } else {
        alert("Fill the details!");
      }
    } catch (error) {
      console.log(error);
      alert("Error Occurred!");
    } finally {
      setIsLoading(false);
    }
  };
  return isLoading ? (
    <video autoPlay muted loop className="bg-[#bdd4fd] h-screen w-screen">
      <source src={LoadingScreen} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  ) : (
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
          onSubmit={handleSubmit}
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
              <select
                name="jee"
                onChange={handleOnChange}
                className=" rounded-lg p-2 h-[3rem] outline-none"
              >
                <option value="">Choose an option</option>
                <option value="Mains">JEE Mains</option>
                <option value="Advanced">JEE Advanced</option>
              </select>
            </div>
          </div>
          <div className="flex justify-between gap-4">
            <div className="flex flex-col w-full">
              <span className=" text-[#334C8A] font-semibold">Quota:</span>

              <select
                name="quota"
                onChange={handleOnChange}
                className=" rounded-lg p-2 h-[3rem] outline-none w-full text-ellipsis overflow-hidden"
                disabled={data.jee === ""}
              >
                <option value="">Choose an option</option>
                {data.jee === "Mains" ? (
                  <>
                    <option value="HS">JEE Mains - Home State</option>
                    <option value="OS">JEE Mains - Other India</option>
                  </>
                ) : (
                  <option value="AI">JEE Advanced - All India</option>
                )}
              </select>
            </div>
            <div className="flex flex-col w-full">
              <span className=" text-[#334C8A] font-semibold">Category:</span>

              <select
                name="category"
                onChange={handleOnChange}
                className=" rounded-lg p-2 h-[3rem] outline-none w-full text-ellipsis overflow-hidden"
                disabled={data.jee === ""}
              >
                <option value="">Choose an option</option>
                <option value="OPEN-Gender-Neutral">OPEN-Gender-Neutral</option>
                <option value="OPEN-Female-only (including Supernumerary)">
                  OPEN-Female-only (including Supernumerary)
                </option>
                <option value="OPEN (PwD)-Gender-Neutral">
                  OPEN (PwD)-Gender-Neutral
                </option>
                <option value="OBC-NCL-Gender-Neutral">
                  OBC-NCL-Gender-Neutral
                </option>
                <option value="OBC-NCL-Female-only (including Supernumerary)">
                  OBC-NCL-Female-only (including Supernumerary)
                </option>
                <option value="SC-Gender-Neutral">SC-Gender-Neutral</option>
                <option value="SC-Female-only (including Supernumerary)">
                  SC-Female-only (including Supernumerary)
                </option>
                <option value="ST-Gender-Neutral">ST-Gender-Neutral</option>
                <option value="ST-Female-only (including Supernumerary)">
                  ST-Female-only (including Supernumerary)
                </option>
              </select>
            </div>
          </div>
          <div className="flex justify-between gap-4">
            <div className="flex flex-col w-full">
              <span className=" text-[#334C8A] font-semibold text-xl">
                AIR:
              </span>
              <input
                type="number"
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
