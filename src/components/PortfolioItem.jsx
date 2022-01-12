import React from "react";

class PortfolioItem extends React.Component {
  render() {
    return (
      <div className="post">
        <div className="projectName">{this.props.currentItem.name}</div>

        {this.props.currentItem.mediaType === "image" ? (
          <img src={this.props.currentItem.mediaUrl} alt="Portfolio Item" />
        ) : (
          <div className="container">
            <iframe
              id="video1"
              title="video1"
              src={this.props.currentItem.mediaUrl}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}

        <div className="textArea">
          <div className="description">
            {this.props.currentItem.description}
          </div>
          <div className="githubLink">
            {this.props.currentItem.links.map((link) => (
              <div>
                <a href={link.src} target="_blank">
                  {link.label}
                </a>
                <br />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default PortfolioItem;
