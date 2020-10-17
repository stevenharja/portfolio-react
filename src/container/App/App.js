import React, { Component } from "react";
import "./App.scss";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import Hero from "../../components/Hero/Hero";
import Footer from "../../components/Footer/Footer";

class App extends Component {
  state = {
    projects: [
      {
        name: "Project 1",
        summary: "Project 1 made with SCSS, CSS, JS etc",
        urlProject: "https://stevenharja.github.io/project-1",
      },
      {
        name: "Project 2",
        summary: "Project 2 made with SCSS, CSS, JS etc",
        urlProject: "https://stevenharja.github.io/project-2",
      },
      {
        name: "Project 3",
        summary: "Project 3 made with SCSS, CSS, JS etc",
        urlProject: "https://stevenharja.github.io/project-3",
      },
      {
        name: "Project 4",
        summary: "Project 4 made with SCSS, CSS, JS etc",
        urlProject: "https://stevenharja.github.io/project-4",
      },
      {
        name: "Project 5",
        summary: "Project 5 made with SCSS, CSS, JS etc",
        urlProject: "https://stevenharja.github.io/project-1",
      },
    ],
    heroContent: {
      title: "I'm Steven, A Web Developer.",
    },
  };
  render() {
    let projectCards;
    if (this.state.projects) {
      projectCards = this.state.projects.map((project) => {
        return <ProjectCard />;
      });
    }
    return (
      <div className="App">
        <Hero title={this.state.heroContent.title} />
        {projectCards}
        <Footer />
      </div>
    );
  }
}

export default App;
