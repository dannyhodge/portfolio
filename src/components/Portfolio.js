import React from 'react';
import HomePage from './Home';
import AboutPage from './About';
import ContactPage from './Contact';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
class Portfolio extends React.Component {

  render() {
    return (
      <div className="Portfolio">


      <Router>
        <Route path="/" render={props => (
          <React.Fragment>
            <header>
              <div id="title">Danny Hodge</div>
              <div id="subtitle">Portfolio and Blog</div>
              <nav><ul>
                <li><Link to="/">Home</Link></li> 
                <li><Link to="/about">About</Link></li> 
                <li><Link to="/contact">Contact</Link></li> 
              </ul></nav></header>
          </React.Fragment>
        )} />

        <Route path="/about" component={AboutPage} />
        <Route exact path="/" component={HomePage} />
        <Route path="/contact" component={ContactPage} />
        </Router>
      </div>
    );
  }
}
export default Portfolio;
