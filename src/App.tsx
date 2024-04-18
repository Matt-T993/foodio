import React from "react";
import Routes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "components/Navbar";

function App() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;
