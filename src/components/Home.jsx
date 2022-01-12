import React from "react";
import PortfolioItem from "./PortfolioItem";
import "../App.css";
import Footer from "./Footer";
import Data from "../data/portfolioItems";

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      counter: 0,
      portfolioItems: [],
    };
  }

  LoadNextImage = () => {
    var currCounter = this.state.counter;
    var myItems = this.state.portfolioItems;
    if (currCounter + 1 > myItems.length - 1) {
      currCounter = 0;
    } else {
      currCounter++;
    }
    this.setState({
      counter: currCounter,
    });
  };

  LoadPreviousImage = () => {
    var currCounter = this.state.counter;
    var myItems = this.state.portfolioItems;
    if (currCounter - 1 < 0) {
      currCounter = myItems.length - 1;
    } else {
      currCounter--;
    }
    this.setState({
      counter: currCounter,
    });
  };

  componentWillMount = () => {
    this.setState({
      portfolioItems: Data,
    });
  };

  render() {

    var counter = this.state.counter;
    var currentItem = this.state.portfolioItems[counter];

    return (
      <div>
        <content>
          <div id="projects">Projects</div>

          <div className="portfolioArea">
            <div className="button">
              <a
                href="#"
                className="previous round"
                onClick={this.LoadPreviousImage}
              >
                &#8249;
              </a>
            </div>

            <PortfolioItem currentItem={currentItem} description={currentItem.description} />

            <div className="button">
              <a
                href="#"
                className="previous round"
                onClick={this.LoadNextImage}
              >
                &#8250;
              </a>
            </div>
          </div>
        </content>

        <Footer />

        <script src="scripts.js"></script>
      </div>
    );
  }
}

export default Home;