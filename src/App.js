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
  const [isLoading, setIsLoading] = useState(false);
  const [ratings, setRatings] = useState([]);

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
            <Home
              setEligibleColleges={setEligibleColleges}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              setRatings={setRatings}
            />
          )
        }
      />
      <Route
        path="/colleges"
        element={<Colleges eligibleColleges={eligibleColleges} setEligibleColleges={setEligibleColleges} ratings={ratings}/>}
      />
      <Route path="/:id" element={<CollegeDetails />} />
    </Routes>
  );
}

export default App;
