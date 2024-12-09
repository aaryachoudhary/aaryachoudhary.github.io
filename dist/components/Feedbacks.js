function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";
const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image
}) => /*#__PURE__*/React.createElement(motion.div, {
  variants: fadeIn("", "spring", index * 0.5, 0.75),
  className: "bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
}, /*#__PURE__*/React.createElement("p", {
  className: "text-white font-black text-[48px]"
}, "\""), /*#__PURE__*/React.createElement("div", {
  className: "mt-1"
}, /*#__PURE__*/React.createElement("p", {
  className: "text-white tracking-wider text-[18px]"
}, testimonial), /*#__PURE__*/React.createElement("div", {
  className: "mt-7 flex justify-between items-center gap-1"
}, /*#__PURE__*/React.createElement("div", {
  className: "flex-1 flex flex-col"
}, /*#__PURE__*/React.createElement("p", {
  className: "text-white font-medium text-[16px]"
}, /*#__PURE__*/React.createElement("span", {
  className: "blue-text-gradient"
}, "@"), " ", name), /*#__PURE__*/React.createElement("p", {
  className: "mt-1 text-secondary text-[12px]"
}, designation, " of ", company)), /*#__PURE__*/React.createElement("img", {
  src: image,
  alt: `feedback_by-${name}`,
  className: "w-10 h-10 rounded-full object-cover"
}))));
const Feedbacks = () => {
  return /*#__PURE__*/React.createElement("div", {
    className: "mt-12 bg-black-100 rounded-[20px]"
  }, /*#__PURE__*/React.createElement("div", {
    className: `${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`
  }, /*#__PURE__*/React.createElement(motion.div, {
    variants: textVariant()
  }, /*#__PURE__*/React.createElement("p", {
    className: styles.sectionSubText
  }, "What others say"), /*#__PURE__*/React.createElement("h2", {
    className: styles.sectionHeadText
  }, "Testimonials"))), /*#__PURE__*/React.createElement("div", {
    className: `${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`
  }, testimonials.map((testimonial, index) => /*#__PURE__*/React.createElement(FeedbackCard, _extends({
    key: testimonial.name,
    index: index
  }, testimonial)))));
};
export default SectionWrapper(Feedbacks, "");