//// Packages
import { MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

//// Components
import ContactMeForm from "./ContactMeForm";

//// Style
import classes from "../style/ContactMe.module.css";

//// Constants
import { contactMeInfo } from "../constants/info";

const ContactMe = () => {
  return (
    <div className={classes.container}>
      <h3 className={classes.title}>Contact</h3>

      <div className={classes.contact}>
        <div className={classes.info}>
          <div className={classes.infoItem}>
            <EnvelopeIcon className={classes.icon} />
            <p>{contactMeInfo.email}</p>
          </div>

          <div className={classes.infoItem}>
            <MapPinIcon className={classes.icon} />
            <p>{contactMeInfo.location}</p>
          </div>
        </div>

        <ContactMeForm />
      </div>
    </div>
  );
};

export default ContactMe;
