import React from "react";
import LoadingScreen from "../assets/loadingScreen.mp4";

const Loader = () => {
  return (
    <video autoPlay muted loop className="bg-[#bdd4fd] h-screen w-screen">
      <source src={LoadingScreen} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default Loader;
