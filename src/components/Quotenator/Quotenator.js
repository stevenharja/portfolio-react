import React from "react";
import "./Quotenator.scss";
import Fade from "react-reveal/Fade";

const quotenator = (props) => {
  return (
    <Fade left delay={500}>
      <button className="Quotenator" onClick={props.clicked}>
        <div className="Quotenator__quote">{props.quote}</div>
        <div className="Quotenator__author">{props.author}</div>
      </button>
    </Fade>
  );
};

export default quotenator;
