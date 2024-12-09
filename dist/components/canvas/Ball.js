import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei';
import CanvasLoader from '../Loader';
const Ball = props => {
  const [decal] = useTexture([props.imgUrl]);
  return /*#__PURE__*/React.createElement(Float, {
    speed: 1.75,
    rotationIntensity: 1,
    floatIntensity: 2
  }, /*#__PURE__*/React.createElement("ambientLight", {
    intensity: 0.25
  }), /*#__PURE__*/React.createElement("directionalLight", {
    position: [0, 0, 0.05]
  }), /*#__PURE__*/React.createElement("mesh", {
    castShadow: true,
    receiveShadow: true,
    scale: 2.75
  }, /*#__PURE__*/React.createElement("icosahedronGeometry", {
    args: [1, 1]
  }), /*#__PURE__*/React.createElement("meshStandardMaterial", {
    color: "#fff8eb",
    polygonOffset: true,
    polygonOffsetFactor: -5,
    flatShading: true
  }), /*#__PURE__*/React.createElement(Decal, {
    position: [0, 0, 1],
    rotation: [2 * Math.PI, 0, 6.25],
    flatShading: true,
    map: decal
  })));
};
const BallCanvas = ({
  icon
}) => {
  return /*#__PURE__*/React.createElement(Canvas, {
    frameloop: "demand",
    dpr: [1, 2],
    gl: {
      preserveDrawingBuffer: true
    }
  }, /*#__PURE__*/React.createElement(Suspense, {
    fallback: /*#__PURE__*/React.createElement(CanvasLoader, null)
  }, /*#__PURE__*/React.createElement(OrbitControls, {
    enableZoom: false
  }), /*#__PURE__*/React.createElement(Ball, {
    imgUrl: icon
  })), /*#__PURE__*/React.createElement(Preload, {
    all: true
  }));
};
export default BallCanvas;