//// Packages
import { motion } from "framer-motion";

//// Style
import classes from "../style/About.module.css";

//// Constants
import { aboutInfo } from "../constants/info";

const About = () => {
  const containerMotions = {
    initial: { x: -200, opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
  };

  const imageMotions = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
  };

  return (
    <motion.div
      variants={containerMotions}
      initial="initial"
      whileInView="whileInView"
      transition={{ duration: 1.5 }}
      className={classes.container}
    >
      <h3 className={classes.title}>About</h3>
      <motion.img
        variants={imageMotions}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        src="./aboutImage.jpg"
        className={classes.image}
      />
      <div className={classes.textContainer}>
        <h4>
          A <span>little</span> background
        </h4>
        <p>{aboutInfo.background}</p>
      </div>
    </motion.div>
  );
};

export default About;
