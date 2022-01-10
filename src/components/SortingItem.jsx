import React from "react";

class SortingItem extends React.Component {
  render() {
    return (
      <div className="post">
        <h2>Sorting and Searching Algorithms</h2>
        <iframe
          title="video4"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/7hkkZPC45VY"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <p>
          This first year assignment had us using sorting and searching
          algorithms, such as Quick Sorts and Binary Searches, using C#, then
          calculating the operational efficiency (O(n)). This was performed on
          weather data.
        </p>
      </div>
    );
  }
}

export default SortingItem;
