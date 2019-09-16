import React from 'react';
import myface from '../meimage.jpg';

class About extends React.Component {


    render() {
        return (

            <body>
                <content>
                    <article>
                        <h1>About The Poop</h1>
                        <h2>Who Am I?</h2>
                        <div id="p">Hi, I'm Danny. I'm a 24 year old Graduate Software Engineer, with interests across all of computing, such as Web Development, Computer Vision, Machine Learning and IoT devices.</div>
                        <div id="p">I spend most of my free time on personal projects, cooking/baking, spending time with friends or gaming. </div>
                        <h2>Personal Projects</h2>
                        <div id="p">Most of my projects should be on my this site, as i'm in the process of trying to get everything uploaded. I try to do a variety of things, such as websites (like this one!), my little Raspberry Pi rover and making mobile/web games.</div>
                        <div id="p">I'm currently aiming to develop some more Raspberry Pi projects, such as a wireless door bell and a security camera setup.</div>
                        <h2>Uni + my masters degree</h2>
                        <div id="p">I undertook a masters degree for multiple reasons; partially to expand my horizons and become a better programmer, but also to find where my passion lies in programming. I love the field, but whether I enjoyed AI/Machine Learning, Computer Vision or Mobile Development the most was still up in the air.</div>
                        <div id="p">I've since discovered that it's not the field that's important, but instead the project itself, and who I'm working with to complete it.</div>
                        <h2>Work</h2>
                        <p>I currently work at Omnicom Balfour Beatty as a Graduate Software Engineer, with a current focus on back-end development, but interacting with the full process, from databases to front-end.</p>
                        <h2>Hobbies</h2>
                        <div id="p">When I'm not staring at a screen for 8 hours, I try to keep myself occupied by getting myself away from the PC. This includes cycling, cooking, reading and chilling out with friends over a cuppa.</div>


                    </article>

                    <div id="images">
                        <img src={myface} width={200} alt="me" />



                    </div>
                </content>

                <footer>
                    <p>Made by Daniel Hodge</p>
                </footer>

                <script src="scripts.js">
                </script>
            </body>

        );
    }
}

export default About;
