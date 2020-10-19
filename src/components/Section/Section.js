import React from "react";
import "./Section.scss";
import Fade from "react-reveal/Fade";

const section = (props) => {
  return (
    <div className="Section">
      <Fade left>
        <h2 className="Section__title Section__title--left">{props.title}</h2>
      </Fade>
      <div className="Section__content">
        <Fade bottom>
          <p className="Section__paragraph">{props.paragraph}</p>
        </Fade>
        {props.animation}
      </div>
    </div>
  );
};

export default section;
