import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Homepage from "./pages/Homepage";
import Accomodations from "./pages/Accomodations";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/JeremiePiard_11_12082022/" element={<Homepage />} />
          <Route path="/JeremiePiard_11_12082022/about" element={<About />} />
          <Route path="/JeremiePiard_11_12082022/logement/:id" element={<Accomodations />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
