//// Packages
import { motion } from "framer-motion";

//// Style
import classes from "../style/Skill.module.css";

const Skill = ({ direction, name }) => {
  const imageMotions = {
    initial: { opacity: 0, x: direction === "left" ? -200 : 200 },
    whileInView: { opacity: 1, x: 0 },
    animate: { opacity: 1, x: 0 },
  };

  return (
    <div className={classes.container}>
      <motion.img
        variants={imageMotions}
        initial="initial"
        animate="animate"
        // whileInView="whileInView"
        transition={{ duration: 1 }}
        src={`https://skillicons.dev/icons?i=${name}`}
        alt={name}
      />
    </div>
  );
};

export default Skill;
