import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Info from "./Pages/Info";
import Contact from "./Pages/Contact";
import "./App.css";
import "./Fonts/Humane-Regular.ttf";
import "./Fonts/Satoshi-Regular.ttf";
import "./Fonts/Satoshi-Light.ttf";
import "./Fonts/Harmony.otf";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/info" element={<Info />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
