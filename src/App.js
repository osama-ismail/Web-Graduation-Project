import React from "react";
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UsingMap from "./pages/UsingMap";
import GarageHome from "./pages/GarageHome";
import General from "./pages/General";
import Profile from "./pages/Profile";
import UsingMapReactNative from "./pages/UsingMapReactNative";
import UsingMapRNgarage from "./pages/UsingMapRNgarage";
import ReactNativeMap from "./pages/ReactNativeMap";
import MapForContactRN from "./pages/MapForContactRN";
import SetLocationRN from "./pages/SetLocationRN";
import FilterMapRN from "./pages/FilterMapRN";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/using-map" element={<UsingMap />} />
        <Route path="/using-map/:lng/:lat" element={<UsingMapReactNative />} />
        <Route path="/using-map-react-native-garage/:lng/:lat/:id" element={<UsingMapRNgarage />} />
        <Route path="/using-map-expert-system/:lng/:lat/:carType/:problem" element={<FilterMapRN />} />
        <Route path="/using-map/:userlng/:userlat/:garagelng/:garagelat" element={<ReactNativeMap />} />
        <Route path="/using-map/setLocation" element={<SetLocationRN />} />
        <Route path="/contactMap/:lng/:lat" element={<MapForContactRN />} />
        <Route path="/main-login" element={<GarageHome />} />
        <Route path="/:name/:id" element={<General />} />
        <Route path="/user-profile/edit-profile/:id" element={<Profile default={'edit'} />} />
        <Route path="/user-profile/services/:id" element={<Profile default={'services'} />} />
        <Route path="/user-profile/expert-system/:id" element={<Profile default={'expert-system'} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App