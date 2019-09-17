
import React from 'react';

class ImageProcessingItem extends React.Component {




    render() {


        return (

            <div className="post">

                <h2>Image Processing in MatLab</h2>

                <iframe title="video1" width="560" height="315" src="https://www.youtube.com/embed/UdJI5bYsCM8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <p>This shows four Image Processing tasks being completed: 1. Image enlargement using Nearest Neighbour and Bilinear Interpolation.
                2. Piecewise linear function to replace a range of values with a single value.
                3. Salt and pepper noise reduction via average and median filtering
                4. Identifying objects in an image </p>


            </div>

        );

    }

}


export default ImageProcessingItem;