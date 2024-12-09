function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from 'maath/random/dist/maath-random.esm';
const Stars = props => {
  const ref = useRef();
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), {
    radius: 1.2
  }));
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });
  return /*#__PURE__*/React.createElement("group", {
    rotation: [0, 0, Math.PI / 4]
  }, /*#__PURE__*/React.createElement(Points, _extends({
    ref: ref,
    positions: sphere,
    stride: 3,
    frustumCulled: true
  }, props), /*#__PURE__*/React.createElement(PointMaterial, {
    transparent: true,
    color: "#f272c8",
    size: 0.002,
    sizeAttenuation: true,
    depthWrite: false
  })));
};
const StarsCanvas = () => {
  return /*#__PURE__*/React.createElement("div", {
    className: "w-full h-auto absolute inset-0 z-[-1]"
  }, /*#__PURE__*/React.createElement(Canvas, {
    camera: {
      position: [0, 0, 1]
    }
  }, /*#__PURE__*/React.createElement(Suspense, {
    fallback: null
  }, /*#__PURE__*/React.createElement(Stars, null)), /*#__PURE__*/React.createElement(Preload, {
    all: true
  })));
};
export default StarsCanvas;