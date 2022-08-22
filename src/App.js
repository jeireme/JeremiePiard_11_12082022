import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Homepage from "./pages/Homepage";
import Accomodations from "./pages/Accomodations";
import ErrorPage from "./pages/ErrorPage";
import styled from "styled-components";
import ScrollToTop from "./components/ScrollToTop";

const AppContainer = styled.div`
  color: #ff6060;
  font-family: 'Montserrat', sans-serif;
  max-width: 1240px;
  margin: auto;
  margin-top: 40px;
  width: 100vw;
  overflow-x: hidden;
`;

function App() {
  return (
    <AppContainer>
      <Router>
        <ScrollToTop/>
        <Navbar />
        <Routes>
          <Route
            exact
            path="/JeremiePiard_11_12082022/"
            element={<Homepage />}
          />
          <Route path="/JeremiePiard_11_12082022/about" element={<About />} />
          <Route
            path="/JeremiePiard_11_12082022/logement/:id"
            element={<Accomodations />}
          />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </AppContainer>
  );
}

export default App;
