import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components';
const App = () => {
  return /*#__PURE__*/React.createElement(BrowserRouter, null, /*#__PURE__*/React.createElement("div", {
    className: "relative z-0 bg-primary"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-hero-pattern bg-cover bg-no-repeat bg-center"
  }, /*#__PURE__*/React.createElement(Navbar, null), /*#__PURE__*/React.createElement(Hero, null)), /*#__PURE__*/React.createElement(About, null), /*#__PURE__*/React.createElement(Experience, null), /*#__PURE__*/React.createElement(Tech, null), /*#__PURE__*/React.createElement(Works, null), /*#__PURE__*/React.createElement("div", {
    className: "relative z-0"
  }, /*#__PURE__*/React.createElement(Contact, null), /*#__PURE__*/React.createElement(StarsCanvas, null))));
};
export default App;