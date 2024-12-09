import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";
const Earth = () => {
  const earth = useGLTF('public/public/planet/scene.gltf');
  return /*#__PURE__*/React.createElement("primitive", {
    object: earth.scene,
    scale: 2.5,
    "position-y": 0,
    "rotation-y": 0
  });
};
const EarthCanvas = () => {
  return /*#__PURE__*/React.createElement(Canvas, {
    shadows: true,
    frameloop: "demand",
    dpr: [1, 2],
    gl: {
      preserveDrawingBuffer: true
    },
    camera: {
      fov: 45,
      near: 0.1,
      far: 200,
      position: [-4, 3, 6]
    }
  }, /*#__PURE__*/React.createElement(Suspense, {
    fallback: /*#__PURE__*/React.createElement(CanvasLoader, null)
  }, /*#__PURE__*/React.createElement(OrbitControls, {
    autoRotate: true,
    enableZoom: false,
    maxPolarAngle: Math.PI / 2,
    minPolarAngle: Math.PI / 2
  }), /*#__PURE__*/React.createElement(Earth, null), /*#__PURE__*/React.createElement(Preload, {
    all: true
  })));
};
export default EarthCanvas;