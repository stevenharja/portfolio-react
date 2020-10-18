import React from "react";
import "./Hero.scss";
import LogoDrop from "../LogoDrop/LogoDrop";
import Fade from "react-reveal/Fade";

const hero = (props) => {
  return (
    <div className="Hero">
      <Fade top>
        <h1 className="Hero__title">{props.title}</h1>
      </Fade>
      <LogoDrop />
    </div>
  );
};

export default hero;
