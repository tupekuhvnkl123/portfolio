//// Packages
import { motion } from "framer-motion";

//// Components
import Project from "./Project";

//// Style
import classes from "../style/Projects.module.css";

//// Contstants
import { projectsInfo } from "../constants/info";

const Projects = () => {
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
      <h3 className={classes.title}>Projects</h3>
      <h3 className={classes.slideInstruction}>* Slide to see more projects</h3>
      <div className={classes.projectsContainer}>
        {projectsInfo.projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>

      <div className={classes.background} />
    </motion.div>
  );
};

export default Projects;
