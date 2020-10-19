import React from "react";
import "./Section.scss";
import Fade from "react-reveal/Fade";

const section = (props) => {
  const paragraphs = props.paragraph.map((paragraph) => {
    return <p className="Section__paragraph">{paragraph}</p>;
  });
  return (
    <div className="Section">
      <Fade left>
        <h2 className="Section__title Section__title--left">{props.title}</h2>
      </Fade>
      <div className="Section__content">
        <div className="Section__text">{paragraphs}</div>
        {props.animation}
      </div>
    </div>
  );
};

export default section;
