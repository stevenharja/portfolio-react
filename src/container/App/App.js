import React, { Component } from "react";
import "./App.scss";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import Hero from "../../components/Hero/Hero";
import Footer from "../../components/Footer/Footer";
import Section from "../../components/Section/Section";
import EyesTrack from "../../components/EyesTrack/EyesTrack";
import Fade from "react-reveal/Fade";

class App extends Component {
  state = {
    projects: [
      {
        name: "Project 1",
        summary: "Project 1 made with SCSS, CSS, JS etc",
        urlProject: "https://stevenharja.github.io/project-1",
        urlImage: "project-1.png",
      },
      {
        name: "Project 2",
        summary: "Project 2 made with SCSS, CSS, JS etc",
        urlProject: "https://stevenharja.github.io/project-2",
        urlImage: "project-1.png",
      },
      {
        name: "Project 3",
        summary: "Project 3 made with SCSS, CSS, JS etc",
        urlProject: "https://stevenharja.github.io/project-3",
        urlImage: "project-1.png",
      },
      {
        name: "Project 4",
        summary: "Project 4 made with SCSS, CSS, JS etc",
        urlProject: "https://stevenharja.github.io/project-4",
        urlImage: "project-1.png",
      },
      {
        name: "Project 5",
        summary: "Project 5 made with SCSS, CSS, JS etc",
        urlProject: "https://stevenharja.github.io/project-1",
        urlImage: "project-1.png",
      },
    ],
    heroContent: {
      title: "I'm Steven, A Web Developer.",
    },
    sectionContent: [
      {
        title: "About Me",
        paragraph:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris accumsan convallis blandit. Morbi imperdiet vehicula lorem ut suscipit. Maecenas sollicitudin ultrices faucibus. Integer in porta mauris. Morbi molestie mattis ultricies. Aliquam vestibulum pulvinar volutpat. Etiam mattis rutrum neque. In consectetur ex mauris, quis viverra urna sollicitudin sed. Suspendisse tincidunt efficitur molestie. Pellentesque tincidunt vehicula sapien in consequat. Fusce in neque sem. In dictum ultricies augue ut finibus.",
        animation: <EyesTrack />,
      },
    ],
  };
  render() {
    let projectCards;
    let sections;
    if (this.state.projects) {
      projectCards = this.state.projects.map((project) => {
        return (
          <ProjectCard
            name={project.name}
            summary={project.summary}
            urlProject={project.urlProject}
            urlImage={project.urlImage}
          />
        );
      });
    }
    if (this.state.sectionContent) {
      sections = this.state.sectionContent.map((section) => {
        return (
          <Section
            title={section.title}
            paragraph={section.paragraph}
            animation={section.animation}
          />
        );
      });
    }
    return (
      <div className="App">
        <Hero title={this.state.heroContent.title} />
        <div className="App__section">
          <Fade right>
            <h2 className="App__section-title App__section-title--right">
              My Projects
            </h2>
          </Fade>
          {projectCards}
          {sections}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
