import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <div id="fullTitle">
            <div id="title">Danny Hodge</div>
            <div id="subtitle">Software Engineer</div>
          </div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    );
  }
}

export default Header;
