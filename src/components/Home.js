import React from 'react';
import ImageProcessingItem from './ImageProcessingItem';
import AndroidItem from './AndroidItem';
import GameItem from './GameItem';
import JQueryItem from './JQueryItem';
import NoteTakingItem from './NoteTakingItem';
import SortingItem from './SortingItem';

import '../App.css';

class Home extends React.Component {

  constructor() {
    super();

    this.state = {
      counter: 0,
      items: []
    }
  }

  LoadNextImage = () => {
    console.log("next");
    var currCounter = this.state.counter;
    var myItems = this.state.items;
    if(currCounter + 1 > myItems.length-1) {
      currCounter = 0;
    }
    else {
      currCounter++;
    }
    this.setState({
      counter: currCounter
    });

  }

  LoadPreviousImage = () => {
    console.log("prev");
    var currCounter = this.state.counter;
    var myItems = this.state.items;
    if(currCounter - 1 < 0) {
      currCounter = myItems.length-1;
    }
    else {
      currCounter--;
    }
    this.setState({
      counter: currCounter
    });

  }

  componentDidMount = () => {
  
    const myItems = [ <ImageProcessingItem />, <AndroidItem />, <GameItem />, <JQueryItem />, <NoteTakingItem />, <SortingItem /> ];
    this.setState({
      items: myItems
    });
  }



  render() {

    console.log("Hello");

    return (
      <React.Fragment>

      <body>


        <content>

          <h1>Projects</h1>

          <div className = "portfolioArea">

          <div className = "button">
          <a href="#" className="previous round" onClick={this.LoadPreviousImage}>&#8249;</a>
          </div>
          
          {this.state.items[this.state.counter]}
          
          <div className = "button">
          <a href="#" className="previous round" onClick={this.LoadNextImage}>&#8250;</a>
          </div>
         
          </div>
      




        </content>

        <footer>
          <p>Made by Daniel Hodge</p>
        </footer>

        <script src="scripts.js">
        </script>
      </body>
      </React.Fragment>
    );
  }
}

export default Home;
