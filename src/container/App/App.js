import React, { Component } from "react";
import "./App.scss";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import Hero from "../../components/Hero/Hero";
import Footer from "../../components/Footer/Footer";
import Section from "../../components/Section/Section";
import EyesTrack from "../../components/EyesTrack/EyesTrack";
import Contacts from "../../components/Contacts/Contacts";
import Quotenator from "../../components/Quotenator/Quotenator";
import Fade from "react-reveal/Fade";

class App extends Component {
  state = {
    projects: [
      {
        name: "Project 1",
        summary: "Project 1 made with SCSS, CSS, JS etc",
        urlProject: "https://stevenharja.github.io/project-1",
        urlGithub: "https://github.com/stevenharja/EVERFit",
        urlImage: "project-1.png",
      },
      {
        name: "Project 2",
        summary: "Project 2 made with SCSS, CSS, JS etc",
        urlProject: "https://stevenharja.github.io/project-2",
        urlGithub: "https://github.com/stevenharja/EVERFit",
        urlImage: "project-1.png",
      },
      {
        name: "Project 3",
        summary: "Project 3 made with SCSS, CSS, JS etc",
        urlProject: "https://stevenharja.github.io/project-3",
        urlGithub: "https://github.com/stevenharja/EVERFit",
        urlImage: "project-1.png",
      },
      {
        name: "Project 4",
        summary: "Project 4 made with SCSS, CSS, JS etc",
        urlProject: "https://stevenharja.github.io/project-4",
        urlGithub: "https://github.com/stevenharja/EVERFit",
        urlImage: "project-1.png",
      },
      {
        name: "Project 5",
        summary: "Project 5 made with SCSS, CSS, JS etc",
        urlProject: "https://stevenharja.github.io/project-1",
        urlGithub: "https://github.com/stevenharja/EVERFit",
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
    contacts: [
      {
        title: "LinkedIn",
        url: "https://www.linkedin.com/in/steven-harjapramana/",
        svg: "linkedin.svg",
      },
      {
        title: "GitHub",
        url: "https://github.com/stevenharja",
        svg: "github.svg",
      },
      {
        title: "Email Me!",
        url: "mailto:stevenharja@gmail.com",
        svg: "mail.svg",
      },
    ],
    quotes: [
      {
        quote: "A smooth sea never made a skilled sailor.",
        person: "Franklin D. Roosevelt",
      },
      {
        quote: "One person can make a difference, and everyone should try.",
        person: "John Fitzgerald Kennedy",
      },
      {
        quote: "If you don't believe in yourself, no one will do it for you.",
        person: "Kobe Bryant",
      },
      {
        quote:
          "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
        person: "Oprah Winfrey",
      },
      {
        quote:
          "The greatest glory in living lies not in never falling, but rising every time we fall",
        person: "Nelson Mandella",
      },
    ],
    quoteSelected: null,
  };

  quoteRandomizer = () => {
    const quote = this.state.quotes[
      Math.floor(Math.random() * this.state.quotes.length)
    ];
    this.setState({ quoteSelected: quote });
  };
  render() {
    let projectCards;
    let sections;
    let contacts;
    let quotenator;
    if (this.state.projects) {
      projectCards = this.state.projects.map((project) => {
        return (
          <ProjectCard
            name={project.name}
            summary={project.summary}
            urlProject={project.urlProject}
            urlGithub={project.urlGithub}
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
    if (this.state.contacts) {
      contacts = <Contacts contacts={this.state.contacts} />;
    }
    if (this.state.quoteSelected) {
      const quote = this.state.quoteSelected;
      quotenator = (
        <Quotenator
          quote={quote.quote}
          author={quote.person}
          clicked={this.quoteRandomizer}
        />
      );
    } else {
      const quote = this.state.quotes[
        Math.floor(Math.random() * this.state.quotes.length)
      ];
      quotenator = (
        <Quotenator
          quote={quote.quote}
          author={quote.person}
          clicked={this.quoteRandomizer}
        />
      );
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
          {contacts}
          {quotenator}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
