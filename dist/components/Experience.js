import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import 'react-vertical-timeline-component/style.min.css';
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { div } from "three/examples/jsm/nodes/Nodes.js";
const ExperienceCard = ({
  experience
}) => {
  return /*#__PURE__*/React.createElement(VerticalTimelineElement, {
    contentStyle: {
      background: '#1d1836',
      color: '#fff'
    },
    contentArrowStyle: {
      borderRight: '7px solid #232631'
    },
    date: experience.date,
    iconStyle: {
      background: experience.iconBg
    },
    icon: /*#__PURE__*/React.createElement("div", {
      className: "flex justify-center items-center w-full h-full"
    }, /*#__PURE__*/React.createElement("img", {
      src: experience.icon,
      alt: experience.company_name,
      className: "w-[60%] h-[60%] object-contain"
    }))
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "text-white text-[24px] font-bold"
  }, experience.title), /*#__PURE__*/React.createElement("p", {
    className: "text-secondary text-[16px]  font-semibold",
    style: {
      margin: 0
    }
  }, experience.company_name)), /*#__PURE__*/React.createElement("ul", {
    className: "mt-5 list-disc ml-5 space-y-2"
  }, experience.points.map((point, index) => /*#__PURE__*/React.createElement("li", {
    key: `experience-point-${index}`,
    className: "text-white-100 text-[14px] pl-1 tracking-wider"
  }, point))));
};
const Experience = () => {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(motion.div, {
    variants: textVariant()
  }, /*#__PURE__*/React.createElement("p", {
    className: styles.sectionSubText
  }, "What I have done so far"), /*#__PURE__*/React.createElement("h2", {
    className: styles.sectionHeadText
  }, "Work Experience")), /*#__PURE__*/React.createElement("div", {
    className: "mt-20 flex flex-col"
  }, /*#__PURE__*/React.createElement(VerticalTimeline, null, experiences.map((experience, index) => /*#__PURE__*/React.createElement(ExperienceCard, {
    key: index,
    experience: experience
  })))));
};
export default SectionWrapper(Experience, "work");