import React from "react";
import "./Contact.scss";

const contact = (props) => {
  const logoUrl = `${process.env.PUBLIC_URL}/assets/img/svg/${props.svg}`;
  return (
    <a className="Contact" href={props.url}>
      <div className="Contact__img-box">
        <img src={logoUrl} className="Contact__img" />
      </div>
      <div className="Contact__text">{props.title}</div>
    </a>
  );
};

export default contact;
