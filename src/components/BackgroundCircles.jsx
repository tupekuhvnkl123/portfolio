//// Packages
import { motion } from "framer-motion";

//// Style
import classes from "../style/BackgroundCircles.module.css";

const BackgroundCircles = () => {
  const containerMotions = {
    initial: { opacity: 0 },
    animate: {
      opacity: [0.1, 0.2, 0.4, 0.7, 0.1, 1.0],
      scale: [1, 2, 2, 2.1, 1],
      borderRadius: ["20%", "20%", "50%", "80%", "20%"],
    },
  };

  return (
    <motion.div
      variants={containerMotions}
      initial="initial"
      animate="animate"
      transition={{ duration: 2.5 }}
      className={classes.container}
    >
      <div className={`${classes.circle} ${classes.first}`} />
      <div className={`${classes.circle} ${classes.second}`} />
      <div className={`${classes.circle} ${classes.third}`} />
      <div className={`${classes.circle} ${classes.fourth}`} />
      <div className={`${classes.circle} ${classes.fifth}`} />
    </motion.div>
  );
};

export default BackgroundCircles;
