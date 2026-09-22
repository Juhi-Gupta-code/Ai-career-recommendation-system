import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Profile from "./Pages/Profile";
import EditProfile from "./Pages/EditProfile";
import ResumeUpload from "./Pages/ResumeUpload";
import Assessment from "./Pages/Assessment";
import Recommendations from "./Pages/Recommendations";
import CareerDetails from "./Pages/CareerDetails";
function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/profile" element={<Profile />} />

        <Route path="/edit-profile" element={<EditProfile />} />

        <Route path="/resume-upload" element={<ResumeUpload />} />

        <Route path="/assessment" element={<Assessment />} />

        <Route
          path="/recommendations"
          element={<Recommendations />}
        />

        <Route
          path="/career/:careerName"
          element={<CareerDetails />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;