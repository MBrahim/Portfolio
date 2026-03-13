import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import SupercapacitorsBackupController from "./components/Projects/SupercapacitorsBackupController";
import ICM20948 from "./components/Projects/ICM20948";
import DRV8701 from "./components/Projects/DRV8701";
import DRV8243 from "./components/Projects/DRV8243";
import Octopus from "./components/Projects/Octopus";
import LeoGV from "./components/Projects/LeoGV";
import LeoGVSenna from "./components/Projects/LeoGVSenna";
import LeoGVCannon from "./components/Projects/LeoGVCannon";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Project" element={<Projects />} />
          <Route path="/About" element={<About />} />
          <Route path="/Resume" element={<Resume />} />
          <Route path="/project/SupercapacitorsBackupController" element={<SupercapacitorsBackupController />} />
          <Route path="/project/ICM20948" element={<ICM20948 />} />
          <Route path="/project/DRV8701" element={<DRV8701 />} />
          <Route path="/project/DRV8243" element={<DRV8243 />} />
          <Route path="/project/Octopus" element={<Octopus />} />
          <Route path="/project/LeoGV" element={<LeoGV />} />
          <Route path="/project/LeoGV/Senna" element={<LeoGVSenna />} />
          <Route path="/project/LeoGV/Cannon" element={<LeoGVCannon />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;