import React from 'react';


class Home extends React.Component {

  render() {
    return (
      <React.Fragment>

      <body>


        <content>

          <h1>Projects</h1>


          <div id="post">

            <h2>Image Processing in MatLab</h2>

            <iframe title="video1" width="560" height="315" src="https://www.youtube.com/embed/UdJI5bYsCM8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <p>This shows four Image Processing tasks being completed: 1. Image enlargement using Nearest Neighbour and Bilinear Interpolation.
            2. Piecewise linear function to replace a range of values with a single value.
            3. Salt and pepper noise reduction via average and median filtering
            4. Identifying objects in an image </p>


          </div>


          <div id="post">

            <h2>Digital Social Frame</h2>
            <iframe title="video2" width="560" height="315" src="https://www.youtube.com/embed/lBHx11h_Fhc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <p>For this project, I used an old Instagram Rest API and Python to connect to a given users account, and display the 5 most recent images in a slideshow, on a Raspberry Pi. Ideally, this would be done on a digital photo frame, but is being tested on a monitor. Designed for elderly users who don't use Instagram, but would like to see photos from family. </p>


          </div>

          <div id="post">

            <h2>Note Taking Application</h2>

            <iframe title="video3" width="560" height="315" src="https://www.youtube.com/embed/UW1Seioz938" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <p>For this project, we had to create a notetaking Windows Form that we could use in our lectures, and be split between modules. This was a first year assignment, and used C# and Visual Studio. As with all the narrated videos, these projects had a time limit for the video, and so I had to rush the explanation.</p>


          </div>

          <div id="post">

            <h2>Sorting and Searching Algorithms</h2>
            <iframe title="video4" width="560" height="315" src="https://www.youtube.com/embed/7hkkZPC45VY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <p>This first year assignment had us using sorting and searching algorithms, such as Quick Sorts and Binary Searches, using C#, then calculating the operational efficiency (O(n)). This was performed on weather data.</p>


          </div>


          <div id="post">

            <h2>Website using JQuery</h2>
            <iframe title="video5" width="560" height="315" src="https://www.youtube.com/embed/z0iIvR6Ow_0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <p>This is a basic first year project, in which I used HTML, CSS and JQuery/Javascript to develop a mockup bookshop website, which incorporated local storage, and a basic shopping cart. Please don't judge me for the aesthetics, I'm not sure what I was thinking.</p>


          </div>



          <div id="post">

            <h2>AdventYour: Android Studio game</h2>

            <iframe title="video6" width="560" height="315" src="https://www.youtube.com/embed/Bnt04s-ci8c" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <p>This project may have been a game, however it reflected typical programming, as it was written in Java (in Android Studio), used location data and an in app camera, and relied on RestAPI data to populate the images of enemies. </p>


          </div>
          <div id="post">

            <h2>Creating a SimCity clone in Unity</h2>
            <iframe title="video7" width="560" height="315" src="https://www.youtube.com/embed/60PoyIY7j9o" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <p>This project had several time related issues, however my economy/calender script worked absolutely fine, and that should be the takeaway here.</p>


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
