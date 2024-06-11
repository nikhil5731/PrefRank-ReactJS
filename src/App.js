import { useEffect, useState } from "react";
import "./App.css";
import Colleges from "./pages/Colleges";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Video from "./components/Video";
import CollegeDetails from "./pages/CollegeDetails";

function App() {
  const [videoClicked, setVideoClicked] = useState(false);
  const [eligibleColleges, setEligibleColleges] = useState([]);
  const [uniqueColleges, setuniqueColleges] = useState([]);
  const [branches, setBranches] = useState([]);
  const [states, setStates] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [ratings, setRatings] = useState([]);

  const handleVideoClick = () => {
    setVideoClicked(true);
  };

  useEffect(() => {
    let tempColleges = [];
    let tempBranches = [];
    let tempStates = [];
    eligibleColleges.map((college) => {
      if (college.institute_name && !tempColleges.includes(college.institute_name)) {
        tempColleges.push(college.institute_name);
      }
      if (college.department && !tempBranches.includes(college.department)) {
        tempBranches.push(college.department);
      }
      if (college.State && !tempStates.includes(college.State)) {
        tempStates.push(college.State);
      }
    });
    setuniqueColleges(tempColleges);
    setStates(tempStates);
    setBranches(tempBranches);
  }, [eligibleColleges]);
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
        element={
          <Colleges
            eligibleColleges={eligibleColleges}
            setEligibleColleges={setEligibleColleges}
            ratings={ratings}
            uniqueColleges={uniqueColleges}
            branches={branches}
            states={states}
          />
        }
      />
      <Route path="/:id" element={<CollegeDetails />} />
    </Routes>
  );
}

export default App;
