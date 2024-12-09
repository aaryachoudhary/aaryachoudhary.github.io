function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link
}) => {
  return /*#__PURE__*/React.createElement(motion.div, {
    variants: fadeIn("up", "spring", index * 0.5, 0.75)
  }, /*#__PURE__*/React.createElement(Tilt, {
    options: {
      max: 45,
      scale: 1,
      speed: 450
    },
    className: "bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative w-full h-[230px]"
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: name,
    className: "w-full h-full object-cover rounded-2xl"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 flex justify-end m-3 card-img_hover"
  }, /*#__PURE__*/React.createElement("div", {
    onClick: () => window.open(source_code_link, "_blank"),
    className: "black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
  }, /*#__PURE__*/React.createElement("img", {
    src: github,
    alt: "github",
    className: "w-1/2 h-1/2 object-contain"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "mt-5"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-white font-bold text-[24px]"
  }, name), /*#__PURE__*/React.createElement("p", {
    className: "mt-2 text-secondary text-[14px]"
  }, description)), /*#__PURE__*/React.createElement("div", {
    className: "mt-4 flex flex-wrap gap-2"
  }, tags.map(tag => /*#__PURE__*/React.createElement("p", {
    key: tag.name,
    className: `text-[14px] ${tag.color}`
  }, "#", tag.name)))));
};
const Works = () => {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(motion.div, {
    variants: textVariant()
  }, /*#__PURE__*/React.createElement("p", {
    className: styles.sectionSubText
  }, "My work"), /*#__PURE__*/React.createElement("h2", {
    className: styles.sectionHeadText
  }, "Projects")), /*#__PURE__*/React.createElement("div", {
    className: "w-full flex"
  }, /*#__PURE__*/React.createElement(motion.p, {
    variants: fadeIn("", "", 0.1, 1),
    className: "mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
  }, "Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories maintained on Github. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.")), /*#__PURE__*/React.createElement("div", {
    className: "mt-20 flex flex-wrap gap-7"
  }, projects.map((project, index) => /*#__PURE__*/React.createElement(ProjectCard, _extends({
    key: `project-${index}`,
    index: index
  }, project)))));
};
export default SectionWrapper(Works, "");