//// Packages
import { motion } from "framer-motion";

//// Components
import Skill from "./Skill";

//// Style
import classes from "../style/Skills.module.css";

//// Constants
import { skillsInfo } from "../constants/info";

const Skills = () => {
  const containerMotions = {
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
      <h3 className={classes.title}>Skills</h3>

      <div className={classes.skillsIconsContainer}>
        {skillsInfo.skills.map((skill, index) => {
          const firstHalf = skillsInfo.skills.length / 2;
          const direction = index < firstHalf ? "left" : "right";
          return <Skill direction={direction} key={skill} name={skill} />;
        })}
      </div>
    </motion.div>
  );
};

export default Skills;
