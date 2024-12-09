function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
const ServiceCard = ({
  index,
  title,
  icon
}) => {
  return /*#__PURE__*/React.createElement(Tilt, {
    className: "xs:w-[250px] w-full"
  }, /*#__PURE__*/React.createElement(motion.div, {
    variants: fadeIn("right", "spring", 0.5 * index, 0.75),
    className: "w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
  }, /*#__PURE__*/React.createElement("div", {
    options: {
      max: 45,
      scale: 1,
      speed: 450
    },
    className: "bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
  }, /*#__PURE__*/React.createElement("img", {
    src: icon,
    alt: title,
    className: "w-16 h-16 object-contain"
  }), /*#__PURE__*/React.createElement("h3", {
    className: "text-white text-[20px] font-bold text-center"
  }, title))));
};
const About = () => {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(motion.div, {
    variants: textVariant()
  }, /*#__PURE__*/React.createElement("p", {
    className: styles.sectionSubText
  }, "Introduction"), /*#__PURE__*/React.createElement("h2", {
    className: styles.sectionHeadText
  }, "Overview")), /*#__PURE__*/React.createElement(motion.p, {
    variants: fadeIn("", "", 0.1, 1),
    className: "mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
  }, "I'm a skilled software developer with experience in Java, Python, Database Management and Machine Learning. I'm a quick learner and have worked closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to drive your insights to innovation."), /*#__PURE__*/React.createElement("div", {
    className: "mt-20 flex flex-wrap gap-10"
  }, services.map((service, index) => /*#__PURE__*/React.createElement(ServiceCard, _extends({
    key: service.title,
    index: index
  }, service)))));
};
export default SectionWrapper(About, "about");