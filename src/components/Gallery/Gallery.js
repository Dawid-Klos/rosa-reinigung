import React from "react";

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

import "../../styles/gallery.scss";

import IMG01 from "../../images/gallery/01.jpg";
import IMG02 from "../../images/gallery/02.jpg";
import IMG03 from "../../images/gallery/03.jpg";
import IMG04 from "../../images/gallery/04.jpg";


const Gallery = () => {
    return(
        <section className="gallery" id="gallery">
            <h2 className="gallery__heading">Fotogalerie.</h2>
            <AwesomeSlider className="gallery__slider">
                <div data-src={IMG01} />
                <div data-src={IMG02} />
                <div data-src={IMG03} />
                <div data-src={IMG04} />
            </AwesomeSlider>
        </section>
    )
}

export default Gallery;