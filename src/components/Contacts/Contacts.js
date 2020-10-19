import React from "react";
import "./Contacts.scss";
import Contact from "./Contact/Contact";
import Fade from "react-reveal/Fade";

const contacts = (props) => {
  let contactElements = props.contacts.map((contact) => {
    return (
      <Contact
        title={contact.title}
        url={contact.url}
        svg={contact.svg}
        key={contact.title}
      />
    );
  });
  return (
    <Fade bottom>
      <div className="Contacts">
        <h1 className="Contacts__title">Contact Me!</h1>
        <div className="Contacts__box"> {contactElements}</div>
      </div>
    </Fade>
  );
};

export default contacts;
