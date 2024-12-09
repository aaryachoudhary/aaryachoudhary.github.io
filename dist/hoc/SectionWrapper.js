import { motion } from "framer-motion";
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";
const SectionWrapper = (Component, idName) => function HOC() {
  return /*#__PURE__*/React.createElement(motion.section, {
    variants: staggerContainer(),
    initial: "hidden",
    whileInView: "show",
    viewport: {
      once: true,
      amount: 0.25
    },
    className: `${styles.padding} max-w-7xl mx-auto relative z-0`
  }, /*#__PURE__*/React.createElement("span", {
    className: "hash-span",
    id: idName
  }, "\xA0"), /*#__PURE__*/React.createElement(Component, null));
};
export default SectionWrapper;