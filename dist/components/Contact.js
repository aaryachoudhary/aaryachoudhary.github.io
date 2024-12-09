import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const handleChange = e => {
    const {
      target
    } = e;
    const {
      name,
      value
    } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };
  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
    emailjs.send('service_kcc2fdm', 'template_ksickk4', {
      from_name: form.name,
      to_name: 'Aarya',
      from_email: form.email,
      to_email: 'aarya.mscs@gmail.com',
      message: form.message
    }, 'BwyFWkHRZpkm4IF3B').then(() => {
      setLoading(false);
      alert("Thank you. I will get back to you as soon as possible.");
      setForm({
        name: "",
        email: "",
        message: ""
      });
    }, error => {
      setLoading(false);
      console.error(error);
      alert("Ahh, something went wrong. Please try again.");
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden"
  }, /*#__PURE__*/React.createElement(motion.div, {
    variants: slideIn("left", "tween", 0.2, 1),
    className: "flex-[0.75] bg-black-100 p-8 rounded-2xl"
  }, /*#__PURE__*/React.createElement("p", {
    className: styles.sectionSubText
  }, "Get in touch"), /*#__PURE__*/React.createElement("h3", {
    className: styles.sectionHeadText
  }, "Contact"), /*#__PURE__*/React.createElement("form", {
    ref: formRef,
    onSubmit: handleSubmit,
    className: "mt-12 flex flex-col gap-8"
  }, /*#__PURE__*/React.createElement("label", {
    className: "flex flex-col"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-white font-medium mb-4"
  }, "Your Name"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "name",
    value: form.name,
    onChange: handleChange,
    placeholder: "Input your name here",
    className: "bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
  })), /*#__PURE__*/React.createElement("label", {
    className: "flex flex-col"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-white font-medium mb-4"
  }, "Your email"), /*#__PURE__*/React.createElement("input", {
    type: "email",
    name: "email",
    value: form.email,
    onChange: handleChange,
    placeholder: "Enter your email address here",
    className: "bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
  })), /*#__PURE__*/React.createElement("label", {
    className: "flex flex-col"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-white font-medium mb-4"
  }, "Your Message"), /*#__PURE__*/React.createElement("textarea", {
    rows: 7,
    name: "message",
    value: form.message,
    onChange: handleChange,
    placeholder: "Please leave a message followed by your email / phone details, so that I can get back to you OR just drop me a text on LinkedIn :)",
    className: "bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
  })), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
  }, loading ? "Sending..." : "Send"))), /*#__PURE__*/React.createElement(motion.div, {
    variants: slideIn("right", "tween", 0.2, 1),
    className: "xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
  }, /*#__PURE__*/React.createElement(EarthCanvas, null)));
};
export default SectionWrapper(Contact, "contact");