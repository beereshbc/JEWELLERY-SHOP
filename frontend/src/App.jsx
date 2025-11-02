import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Collections from "./pages/Collections";
import Rings from "./pages/Rings";
import Navbar from "./components/Navbar";
import Necklaces from "./pages/Necklaces";
import Earrings from "./pages/Earrings";

const App = () => {
  return (
    <div className="font-bold">
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/rings" element={<Rings />} />
        <Route path="/necklaces" element={<Necklaces />} />
        <Route path="/earrings" element={<Earrings />} />
      </Routes>
    </div>
  );
};

export default App;
