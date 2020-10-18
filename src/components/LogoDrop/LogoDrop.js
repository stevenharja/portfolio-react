import React from "react";
import "./LogoDrop.scss";
import Fade from "react-reveal/Fade";

const logoDrop = (props) => {
  return (
    <Fade right delay={1000}>
      <span className="LogoDrop">
        <div className="LogoDrop__text">SH</div>
      </span>
    </Fade>
  );
};

export default logoDrop;
