import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Section/Home";
import AllPortfolio from "./components/Page/AllPortfolio";

function App() {
  return (
    <Router>
      <div className="app-container lg:px-18 px-8 sm:px-12 md:px-16 xl:px-24 2xl:px-[10rem]">
        <div className="background-gradient">
          {/* Clean circular gradient orbs */}
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-orb orb-3"></div>
          <div className="gradient-orb orb-4"></div>
        </div>

        <div className="content-wrapper z- relative">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<AllPortfolio />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
