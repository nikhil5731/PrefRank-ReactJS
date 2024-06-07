  import "./App.css";
import Colleges from "./pages/Colleges";
  import Home from "./pages/Home";
  import { Route, Routes } from "react-router-dom";

  function App() {
    return (
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/colleges" element={<Colleges/>}/>
      </Routes>
    );
  }

  export default App;
