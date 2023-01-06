//// Packages
import { useForm } from "react-hook-form";

//// Style
import classes from "../style/ContactMeForm.module.css";

const ContactMeForm = () => {
  const { register, handleSubmit } = useForm();

  const submitHandler = (formData) => {
    window.location.href = `mailto:ofeklevi36@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message}`;
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)} className={classes.form}>
      <div>
        <input {...register("name")} placeholder="Name" type="text" />
        <input {...register("email")} placeholder="Email" type="email" />
      </div>

      <input {...register("subject")} placeholder="Subject" type="text" />

      <textarea {...register("message")} placeholder="Message" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactMeForm;
