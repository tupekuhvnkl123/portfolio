//// Packages
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

//// Style
import classes from "../style/Header.module.css";

const Header = () => {
  const socialLinks = {
    github: "https://github.com/tupekuhvnkl123",
    linkedIn: "https://www.linkedin.com/in/ofek-levi-13704a220",
    upWork: "https://www.upwork.com/freelancers/~01dd3af11fbed70812",
    instagram: "https://www.instagram.com/ofek_levi16/",
    fiverr: "https://www.fiverr.com/tupekuh123",
  };

  const socialLinksMotions = {
    initial: { opacity: 0, scale: 0.5, x: -500 },
    animate: { opacity: 1, scale: 1, x: 0 },
  };
  const getInTouchMotions = {
    initial: { opacity: 0, scale: 0.5, x: 500 },
    animate: { opacity: 1, scale: 1, x: 0 },
  };

  return (
    <header className={classes.header}>
      <motion.div
        variants={socialLinksMotions}
        initial="initial"
        animate="animate"
        transition={{ duration: 1.5 }}
        className={classes.socialIcons}
      >
        <SocialIcon
          url={socialLinks.upWork}
          fgColor="gray"
          bgColor="rgb(36, 36, 36)"
          target="_blank"
        />
        <SocialIcon
          url={socialLinks.fiverr}
          fgColor="gray"
          bgColor="transparent"
          target="_blank"
        />
        <SocialIcon
          url={socialLinks.github}
          fgColor="gray"
          bgColor="transparent"
          target="_blank"
        />
        <SocialIcon
          url={socialLinks.linkedIn}
          fgColor="gray"
          bgColor="transparent"
          target="_blank"
        />
        <SocialIcon
          url={socialLinks.instagram}
          fgColor="gray"
          bgColor="transparent"
          target="_blank"
        />
      </motion.div>

      <motion.a
        variants={getInTouchMotions}
        initial="initial"
        animate="animate"
        transition={{ duration: 1.5 }}
        className={classes.getInTouch}
        href="#contactMe"
      >
        <SocialIcon network="email" fgColor="gray" bgColor="transparent" />
        <p>Get In Touch</p>
      </motion.a>
    </header>
  );
};

export default Header;
