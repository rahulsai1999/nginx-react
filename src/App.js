import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./pages/home";
import OtherPage from "./pages/other";

import "antd/dist/antd.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/other" component={OtherPage} />
      </Router>
    </div>
  );
}

export default App;
