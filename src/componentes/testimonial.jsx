import React from "react";
import imagesEmma from  "../images/Emma-Bostian.png";
import "../styles/Testimonial.css";

function Testimonial() {
  return (
    <div className="container-testimonial">
      <img className="image-testimonial" src={imagesEmma} alt="Foto de Emma" />
      <div className="container-text-testimonial">
        <p className="name-testimonial">Emma Bostian in Sweden</p>
        <p className="job-testimonial">Software Engineer at Spotify</p>
        <p className="text-testimonial">
          "I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify."
        </p>
      </div>
    </div>
  )
}
export {Testimonial}