import { useState } from "react";
import "./App.css";
import Colleges from "./pages/Colleges";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Video from "./components/Video";
import CollegeDetails from "./pages/CollegeDetails";

function App() {
  const [videoClicked, setVideoClicked] = useState(false);
  const [eligibleColleges, setEligibleColleges] = useState([]);

  const handleVideoClick = () => {
    setVideoClicked(true);
  };
  return (
    <Routes>
      <Route
        path="/"
        element={
          !videoClicked ? (
            <Video handleVideoClick={handleVideoClick} />
          ) : (
            <Home setEligibleColleges={setEligibleColleges} />
          )
        }
      />
      <Route path="/colleges" element={<Colleges eligibleColleges={eligibleColleges}/>} />
      <Route path="/:id" element={<CollegeDetails />} />
    </Routes>
  );
}

export default App;
