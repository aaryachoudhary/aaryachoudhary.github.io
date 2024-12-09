import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { menu, close } from '../assets';
const Navbar = () => {
  const [active, setActive] = useState(' ');
  const [toggle, setToggle] = useState(false);
  return /*#__PURE__*/React.createElement("nav", {
    className: `${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-full flex justify-between items-center max-w-7xl mx-auto"
  }, /*#__PURE__*/React.createElement(Link, {
    to: "/",
    className: "flex items-center gap-2",
    onClick: () => {
      setActive("");
      window.screenTo(0, 0);
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "src\\assets\\boxlogo.png",
    alt: "logo",
    className: "w-9 h-9 object-contain"
  }), /*#__PURE__*/React.createElement("p", {
    className: "text-white text-[18px] font-bold cursor-pointer"
  }, "Aarya ", /*#__PURE__*/React.createElement("span", null, "Choudhary"))), /*#__PURE__*/React.createElement("ul", {
    className: "list-none hidden sm:flex flex-row gap-10"
  }, navLinks.map(link => /*#__PURE__*/React.createElement("li", {
    key: link.id,
    className: `${active === link.title ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium curson-pointer`,
    onClick: () => setActive(link.title)
  }, /*#__PURE__*/React.createElement("a", {
    href: `#${link.id}`
  }, link.title)))), /*#__PURE__*/React.createElement("div", {
    className: "sm:hidden flex flex-1 justify-end items-center"
  }, /*#__PURE__*/React.createElement("img", {
    src: toggle ? close : menu,
    alt: "menu",
    className: "w-[28px] h-[28px] object-contain cursor-pointer",
    onClick: () => setToggle(!toggle)
  }), /*#__PURE__*/React.createElement("div", {
    className: `${!toggle ? 'hidden' : 'flex'} p-6 
          black-gradient absolute top-20 right-0 mx-4 my-2 
          min-w-[140px] z-10 rounded-xl`
  }, /*#__PURE__*/React.createElement("ul", {
    className: "list-none flex justify-end items-start flex-col gap-4"
  }, navLinks.map(link => /*#__PURE__*/React.createElement("li", {
    key: link.id,
    className: `${active === link.title ? "text-white" : "text-secondary"} font-poppins font-medium curson-pointer text-[16px]`,
    onClick: () => {
      setToggle(!toggle);
      setActive(link.title);
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: `#${link.id}`
  }, link.title))))))));
};
export default Navbar;