//// Packages
import { Cursor, useTypewriter } from "react-simple-typewriter";

//// Components
import BackgroundCircles from "./BackgroundCircles";

//// Style
import classes from "../style/Hero.module.css";

//// Constants
import { heroInfo } from "../constants/info";

const Hero = () => {
  const [text, count] = useTypewriter({
    words: heroInfo.typewriterText,
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className={classes.container}>
      <BackgroundCircles />
      <img className={classes.image} src="./heroImage.jpg" alt="Ofek Levi" />
      <div style={{ zIndex: 20 }}>
        <div className={classes.textContainer}>
          <h2>{heroInfo.profession}</h2>
          <h1>
            <span>{text}</span>
            <Cursor cursorColor="#F7AB0A" />
          </h1>
        </div>
        <div className={classes.buttonsContainer}>
          <a href="#about">
            <button>About</button>
          </a>
          {/* <a href="#experience">
            <button>Experience</button>
          </a> */}
          <a href="#skills">
            <button>Skills</button>
          </a>
          <a href="#projects">
            <button>Projects</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
