import "./App.css";
import Header from "./components/Header";
import Home from "./components/Section/Home";
import Skills from "./components/Section/Skills";

function App() {
  return (
    <div className="app-container px-[10rem]">
      <div className="background-gradient">
        {/* Clean circular gradient orbs */}
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
        <div className="gradient-orb orb-4"></div>
      </div>

      <div className="content-wrapper z- relative">
        <Header />
        <Home />
      </div>
    </div>
  );
}

export default App;
