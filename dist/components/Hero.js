import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
const Hero = () => {
  return /*#__PURE__*/React.createElement("section", {
    className: `relative w-full h-screen mx-auto`
  }, /*#__PURE__*/React.createElement("div", {
    className: `${styles.paddingX} absolute inset-0 top-[120px]
      max-w-7xl mx-auto flex flex-row items-start gap-5`
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col justify-center items-center mt-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-5 h-5 rounded-full bg-[#915eff]"
  }), /*#__PURE__*/React.createElement("div", {
    className: "w-1 sm:h-80 h-40 violet-gradient"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    className: `${styles.heroHeadText}
          text-white`
  }, "Hi, I'm ", /*#__PURE__*/React.createElement("span", {
    className: "text-[#915eff]"
  }, "Aarya")), /*#__PURE__*/React.createElement("p", {
    className: `${styles.heroSubText} mt-2 text-white-100`
  }, "A graduate student at Arizona State University ", /*#__PURE__*/React.createElement("br", {
    className: "sm:block hidden"
  }), " MS in Computer Science (Big Data Systems)"))), /*#__PURE__*/React.createElement(ComputersCanvas, null), /*#__PURE__*/React.createElement("div", {
    className: "absolute xs: bottom-7 bottom-32 w-full flex justify-center items-center"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#about"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-[35px] h-[64px] rounded-3xl border-4 border-secondary  flex justify-center items-start p-2"
  }, /*#__PURE__*/React.createElement(motion.div, {
    animate: {
      y: [0, 24, 0]
    },
    transition: {
      duration: 1.5,
      repeat: Infinity,
      repeatType: 'loop'
    },
    className: "w-3 h-3 rounded-full  bg-secondary mb-1"
  })))));
};
export default Hero;