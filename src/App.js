import { useState } from "react";
import "./App.css";
import Colleges from "./pages/Colleges";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Video from "./components/Video";

function App() {
  const [videoClicked, setVideoClicked] = useState(false);

  const handleVideoClick = () => {
    setVideoClicked(true);
  };
  return (
    <Routes>
      <Route path="/" element={!videoClicked ? <Video handleVideoClick={handleVideoClick}/> : <Home />} />
      <Route path="/colleges" element={<Colleges />} />
    </Routes>
  );
}

export default App;
