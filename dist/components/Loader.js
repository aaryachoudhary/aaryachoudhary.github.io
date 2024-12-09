import { Html, useProgress } from "@react-three/drei";
const CanvasLoader = () => {
  const {
    progress
  } = useProgress();
  return /*#__PURE__*/React.createElement(Html, null, /*#__PURE__*/React.createElement("span", {
    className: "canvas-load"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: '#f1f1f1',
      fontWeight: 800,
      marginTop: 40
    }
  }, progress.toFixed(2), "%"));
};
export default CanvasLoader;