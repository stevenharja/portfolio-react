import React from "react";
import "./EyesTrack.scss";
import Fade from "react-reveal/Fade";

const eyesTrack = (props) => {
  return (
    <Fade right>
      <span className="EyesTrack">
        <span className="EyesTrack__eye EyesTrack__eye--left"></span>
        <span className="EyesTrack__eye EyesTrack__eye--right"></span>
      </span>
    </Fade>
  );
};

export default eyesTrack;
