import React from "react";

class PortfolioItem extends React.Component {
  render() {
    return (
      <div className="post">
        <div className="projectName">{this.props.currentItem.name}</div>

        <iframe
          id="video1"
          title="video1"
          width="560"
          height="315"
          src={this.props.currentItem.url}
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <div className="textArea">
          <p>{this.props.currentItem.description}</p>
        </div>
        {/* <div className="githubLink">{this.props.currentItem.link}</div> */}
      </div>
    );
  }
}

export default PortfolioItem;
