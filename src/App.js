import React from "react";
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UsingMap from "./pages/UsingMap";
import GarageHome from "./pages/GarageHome";
import General from "./pages/General";
import Profile from "./pages/Profile";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/using-map" element={<UsingMap />} />
        <Route path="/garage-login/:id" element={<GarageHome />} />
        <Route path="/:name" element={<General />} />
        <Route path="/user-profile/:id" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App