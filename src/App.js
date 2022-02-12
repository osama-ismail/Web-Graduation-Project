import React from "react";
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Map from "./pages/Map";
import GarageHome from "./pages/GarageHome";
import General from "./pages/General";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/using-map" element={<Map />} />
        <Route path="/login/:userid" element={<GarageHome />} />
        <Route path="/:name" element={<General />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App