import React, { Component } from "react";
import "./App.scss";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import Hero from "../../components/Hero/Hero";
import Section from "../../components/Section/Section";
import EyesTrack from "../../components/EyesTrack/EyesTrack";
import Contacts from "../../components/Contacts/Contacts";
import Quotenator from "../../components/Quotenator/Quotenator";
import Fade from "react-reveal/Fade";

class App extends Component {
  state = {
    projects: [
      {
        name: "Travelloging",
        summary:
          "Blogging-Oriented Website, Built With React And SCSS For Front-End, And Placeholder API For Blog Posts.",
        urlProject: "https://stevenharja.github.io/travelloging-react/",
        urlGithub: "https://github.com/stevenharja/travelloging-react",
        urlImage: "travelloging.png",
      },
      {
        name: "EVERFit",
        summary:
          "Health-Focused Website, Built With NodeJS As Back-End (See GitHub), And SCSS For Front-End.",
        urlProject: "https://stevenharja.github.io/EVERFit-template/",
        urlGithub: "https://github.com/stevenharja/EVERFit",
        urlImage: "everfit.png",
      },
      {
        name: "Trust Motors",
        summary: "Vehicle Showroom Themed, Built Using SCSS For Front-End",
        urlProject: "https://stevenharja.github.io/trust-motors/",
        urlGithub: "https://github.com/stevenharja/trust-motors",
        urlImage: "trust-motors.png",
      },
      {
        name: "COVID-19 Tracker",
        summary:
          "Using Disease.SH API, Developed A COVID-19 Tracker With React, SCSS, Leaflet Map",
        urlProject: "https://stevenharja.github.io/covid19-tracker/",
        urlGithub: "https://github.com/stevenharja/EVERFit",
        urlImage: "covid19tracker.png",
      },
    ],
    heroContent: {
      title: "I'm Steven, A Web Developer.",
    },
    sectionContent: [
      {
        title: "About Me",
        paragraph:
          "Hello there! My name is Steven Harjapramana, I am a self-developed, and continously learning web developer. My skills involves front-end development, using SASS(SCSS), React, CSS3, JavaScript. I am also familiar to back-end development, using NodeJS, CakePHP, PHP",
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
      {
        quote: "If there is no struggle, there is no progress",
        person: "Frederick Douglass",
      },
      {
        quote:
          "We don't rise to the level of our expectation, we fall to the level of our training",
        person: "David Goggins",
      },
      {
        quote: "To learn to succeed, you must first learn to fail",
        person: "Michael Jordan",
      },
      {
        quote: "A person who never made a mistake never tried anything new.",
        person: "Albert Einstein",
      },
      {
        quote: "If we don't change, we don't grow, we aren't really living",
        person: "Gail Sheehy",
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
            key={project.name}
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
            key={section.title}
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
      </div>
    );
  }
}

export default App;
