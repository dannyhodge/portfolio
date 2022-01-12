const portfolioItems = [
  {
    name: "Goal Tracking App on the Google Play Store",
    description: `I spent a long time looking for an app to help me with tracking goals, 
    however they all had such poor User Experiences that I decided to create my own which, in my opinion, fixed those issues. 
    My main issue was the amount of time it took to get started on the app and to create goals. I also wanted to try and 
    give it a good design, as this was a skill I wasn't confident in. Looking back on it, I'm very happy with how it turned out, and it felt 
    great finishing a project with so much polish. In terms of the technology stack, I used React Native to build the app, 
    and the data is stored in SQLite databases on the device to avoid forcing users to create an account.`,
    mediaType: "image",
    mediaUrl: "/goalsetter.png",
    links: [
      {
        src: "https://github.com/dannyhodge/GoalSetter",
        label: "Source Code",
      },
      {
        src: "https://play.google.com/store/apps/details?id=dannyhodge.expo.progressyourself",
        label: "Play Store",
      },
    ],
  },
  {
    name: "Smart Frame IoT Device",
    description: `This was probably the most rewarding side project I've ever worked on, as it was my first full stack side project, and my first (and last) IoT device. 
    The idea behind the device was to be a Digital Photo Frame, with less effort. So I created a simple React App to upload images to, 
    which were stored using Firestore (and Postgres storing blob locations and data). The backend was written in Express, which I taught myself for this project, 
    and the images were displayed on a Raspberry Pi using Python, which pulled down the list of images, and displayed them one by one.`,
    mediaType: "image",
    mediaUrl: "/smartframe.jpg",
    links: [
      {
        src: "https://github.com/dannyhodge/SmartFrameAPI",
        label: "API Source Code",
      },
      {
        src: "https://github.com/dannyhodge/SmartFrame_PythonUI",
        label: "Python Source Code",
      },
      {
        src: "https://github.com/dannyhodge/SmartFrame_ReactUploader",
        label: "Uploader Source Code",
      },
    ],
  },
  {
    name: "This Website!",
    description: `This website was written in React in 2019, and has been gradually improved since. 
    There's not a lot to talk about technically speaking, I didn't use a components library such as Bootstrap, 
    which is rare for my side projects, so everything (including the Carousel) is hand made. The code isn't perfect, 
    as I initially started this project to help me learn React, which was my first framework, and the code certainly reflected it.`,
    mediaType: "image",
    mediaUrl: "/mywebsite.JPG",
    links: [
      {
        src: "https://github.com/dannyhodge/portfolio",
        label: "Source Code",
      },
    ],
  },
  {
    name: "Platforming Game in Angular, using HTML Canvas",
    description: `As I was implementing a new feature on a work project, 
    I realised I didn't have a very solid understanding of how to work with with an interactive HTML Canvas. 
    Therefore, I decided to try and make a simple game in order to take an interactive Canvas to an extreme.
    This worked out really well, as it helped me understand the pattern of redrawing the canvas with every frame, 
    and I was able to apply that to the work project I was undertaking. 
    This project was also good for getting more experience with Angular. `,
    mediaType: "image",
    mediaUrl: "/angularcanvasplatformer.png",
    links: [
      {
        src: "https://github.com/dannyhodge/AngularCanvasPlatformer",
        label: "Source Code",
      },
    ],
  },
  {
    name: "Image Processing in MatLab",
    description: `This shows four Image Processing tasks being completed: 1. Image
    enlargement using Nearest Neighbour and Bilinear Interpolation. 2.
    Piecewise linear function to replace a range of values with a single
    value. 3. Salt and Pepper noise reduction via Average and Median
    Filtering. 4. Identifying and extracting objects in an image.`,
    mediaType: "video",
    mediaUrl: "https://www.youtube.com/embed/UdJI5bYsCM8",
    links: [
      {
        src: "https://github.com/dannyhodge/ImageProcessing",
        label: "Source Code",
      },
    ],
  },
  {
    name: "Sorting and Searching Algorithms",
    description: `This first year uni assignment had us using sorting and searching
    algorithms, such as Quick Sorts and Binary Searches, using C#, then
    calculating the operational efficiency (O(n)). The calculations were performed on a large amount of past weather data.`,
    mediaType: "video",
    mediaUrl: "https://www.youtube.com/embed/7hkkZPC45VY",
    links: [
      {
        src: "https://github.com/dannyhodge/AlgorithmsDataStructures",
        label: "Source Code",
      },
    ],
  },
];

export default portfolioItems;
