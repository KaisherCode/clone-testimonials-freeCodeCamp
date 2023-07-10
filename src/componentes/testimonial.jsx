import React from "react";

import "../styles/Testimonial.css";

function Testimonial(props) {
  return (
    <div className="container-testimonial">
      <img className="image-testimonial" src={require(`../images/${props.image}.png`)} alt="Foto de Emma" />
      <div className="container-text-testimonial">
        <p className="name-testimonial"> <strong> {props.name}</strong> in {props.country}</p>
        <p className="job-testimonial">{props.jobs} at <strong>{props.company}</strong> </p>
        <p className="text-testimonial">
          "{props.testimonial}"
        </p>
      </div>
    </div>
  )
}
export { Testimonial }