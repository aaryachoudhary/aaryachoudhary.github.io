import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { div } from "three/examples/jsm/nodes/Nodes.js";
const Tech = () => {
  return /*#__PURE__*/React.createElement("div", {
    className: "flex flex-row flex-wrap justify-center gap-10"
  }, technologies.map(technology => /*#__PURE__*/React.createElement("div", {
    className: "w-28 h-28",
    key: technology.name
  }, /*#__PURE__*/React.createElement(BallCanvas, {
    icon: technology.icon
  }))));
};
export default SectionWrapper(Tech, "");