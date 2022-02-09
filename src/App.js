import React from "react";
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Map from "./pages/Map";
import GarageHome from "./pages/GarageHome";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/using-map" element={<Map />} />
        <Route path="/login/:userid" element={<GarageHome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App