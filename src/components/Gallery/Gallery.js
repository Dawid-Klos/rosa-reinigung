import React from "react";

import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

import InstagramPosts from "./InstagramPosts";
import "../../styles/gallery.scss";

const Gallery = () => {
  return (
    <section className="gallery" id="gallery">
      <h2 className="gallery__heading">Sehen Sie, was es auf meinem Instagram gibt.</h2>
      <AwesomeSlider className="gallery__slider">{InstagramPosts}</AwesomeSlider>
    </section>
  );
};

export default Gallery;
