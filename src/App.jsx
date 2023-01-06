//// Components
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";

//// Style
import classes from "./style/App.module.css";

const App = () => {
  return (
    <div className={classes.container}>
      <Header />

      <section id="hero" className={classes.heroSection}>
        <Hero />
      </section>

      <section id="about" className={classes.aboutSection}>
        <About />
      </section>

      {/* Experience */}

      <section id="skills" className={classes.skillsSection}>
        <Skills />
      </section>

      <section id="projects" className={classes.projectsSection}>
        <Projects />
      </section>

      <section id="contactMe" className={classes.contactMeSection}>
        <ContactMe />
      </section>
    </div>
  );
};

export default App;
