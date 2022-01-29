import React from "react";
import Home from './pages/Home';
import Navbar from './components/main-nav-bar/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavList from "./components/navlist/NavList";


const App = () => {
  const [showNavList, setShowNavList] = React.useState(false);

  const handleClickOnList = () => {
    console.log('Clicked')
    setShowNavList(!showNavList)
  }

  return (
    <BrowserRouter>
      <Navbar handleEvent={handleClickOnList} />
      {showNavList ? <NavList /> : null}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App