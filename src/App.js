import { useEffect, useState } from "react";
import "./App.css";
import Colleges from "./pages/Colleges";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import CollegeDetails from "./pages/CollegeDetails";
import Compare from "./pages/Compare";

function App() {
  const [data, setData] = useState({
    name: "",
    email: "",
    jee: "",
    quota: "",
    category: "",
    air: "",
  });

  const [eligibleColleges, setEligibleColleges] = useState(
    JSON.parse(localStorage.getItem("eligibleColleges")) || []
  );
  const [uniqueColleges, setuniqueColleges] = useState([]);
  const [branches, setBranches] = useState([]);
  const [states, setStates] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [ratings, setRatings] = useState([]);


  useEffect(() => {
    localStorage.setItem("eligibleColleges", JSON.stringify(eligibleColleges));
  }, [eligibleColleges]);

  useEffect(() => {
    let tempColleges = [];
    let tempBranches = [];
    let tempStates = [];
    eligibleColleges.forEach((college) => {
      if (
        college.institute_name &&
        !tempColleges.includes(college.institute_name)
      ) {
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
          <Home
            setEligibleColleges={setEligibleColleges}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            setRatings={setRatings}
            data={data}
            setData={setData}
          />
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
            setRatings={setRatings}
            data={data}
          />
        }
      />
      <Route
        path="/:id"
        element={
          <CollegeDetails isLoading={isLoading} setIsLoading={setIsLoading} />
        }
      />
      <Route
        path="/compareColleges"
        element={<Compare isLoading={isLoading} setIsLoading={setIsLoading} />}
      />
    </Routes>
  );
}

export default App;
