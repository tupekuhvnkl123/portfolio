//// Packages
import { motion } from "framer-motion";

//// Style
import classes from "../style/Project.module.css";

const Project = ({ project }) => {
  const imageMotions = {
    initial: { y: -100, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
  };

  const openProject = (url) => {
    window.open(project.link, "_blank", "noopener,noreferrer");
  };

  return (
    <div className={classes.project}>
      <motion.img
        variants={imageMotions}
        initial="initial"
        whileInView="whileInView"
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        src={project.img}
        alt={project.name}
        onClick={openProject}
        className={classes.projectImage}
      />
      <div className={classes.text}>
        <h4 onClick={openProject}>{project.name}</h4>
        <div className={classes.technologies}>
          {project.technologies.map((tech, index) => (
            <img
              key={index}
              alt={tech}
              src={`https://skillicons.dev/icons?i=${tech}`}
            />
          ))}
        </div>
        <p>{project.description}</p>
      </div>
    </div>
  );
};

export default Project;
