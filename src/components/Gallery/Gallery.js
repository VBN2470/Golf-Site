
import React from 'react';
import './Gallery.css';
import js from '../../pictures/js.jpg'; 
import gallery2 from '../../pictures/gallery2.jpg';

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
            <figure>
                <img 
                    src={gallery2} 
                />
                <figcaption>Wayne and John</figcaption>
            </figure>
                
            </div>
        </div>

    );
};

export default Gallery;
