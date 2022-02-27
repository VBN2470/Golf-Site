
import React from 'react';
import './Gallery.css';
import js from '../../pictures/js.jpg'; 

const Gallery = () => {
    return (
        <div>  
            <div className="showcase-gallery">
                <h3>Gallery</h3>
            </div>
            <div>
            <figure>
                <img 
                    src={js} 
                    height="30%"
                    width="30%" 
                />
                <figcaption>John Speck's "Hole in One"</figcaption>
            </figure>
                
            </div>
        </div>

    );
};

export default Gallery;
