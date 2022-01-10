import React from "react";
import HomePage from "./Home";
import ContactPage from "./Contact";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./Header";

class Portfolio extends React.Component {
  render() {
    return (
      <div className="Portfolio">
        <Router>
          <Route path="/" component={Header} />
          <Route exact path="/" component={HomePage} />
          <Route path="/contact" component={ContactPage} />
        </Router>
      </div>
    );
  }
}
export default Portfolio;
