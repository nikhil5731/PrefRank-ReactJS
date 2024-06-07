import React from "react";
import video from "../assets/video.mp4";

const Video = ({ handleVideoClick }) => {
  return (
    <div
      onClick={handleVideoClick}
      style={{
        width: "100vw",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 9999,
      }}
    >
      <video autoPlay muted loop style={{ width: "100%", height: "100%" }}>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;
