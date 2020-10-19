import React from "react";
import "./ProjectCard.scss";

const projectCard = (props) => {
  let projectImage;
  if (props.urlImage) {
    const imageUrl = `${process.env.PUBLIC_URL}/assets/img/${props.urlImage}`;
    projectImage = (
      <img src={imageUrl} className="ProjectCard__img" alt={props.name} />
    );
  }
  return (
    <div className="ProjectCard">
      <div className="ProjectCard__img-box">{projectImage}</div>
      <div className="ProjectCard__text">
        <div className="ProjectCard__title">{props.name}</div>
        <div className="ProjectCard__summary">{props.summary}</div>
        <div className="ProjectCard__links">
          <a
            className="ProjectCard__link"
            href={props.urlProject}
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Website
          </a>
          <a
            className="ProjectCard__link"
            href={props.urlGithub}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default projectCard;
