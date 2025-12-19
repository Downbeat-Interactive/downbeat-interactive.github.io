'use strict';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }
  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.    
    return {
      hasError: true
    };
  }
  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service    
    console.log(errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return /*#__PURE__*/React.createElement("div", {
        className: "box error"
      }, /*#__PURE__*/React.createElement("div", {
        className: "inner"
      }, /*#__PURE__*/React.createElement("h3", {
        className: "align-center"
      }, /*#__PURE__*/React.createElement("b", null, /*#__PURE__*/React.createElement("i", {
        className: "fas fa-exclamation-circle"
      }), " Uh oh! Something went wrong. ", /*#__PURE__*/React.createElement("i", {
        className: "fas fa-bug"
      })), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), this.props.showBack ? /*#__PURE__*/React.createElement("a", {
        href: "/"
      }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("i", {
        className: "fas fa-arrow-left"
      }), " Return to Downbeat")) : /*#__PURE__*/React.createElement("div", null))));
    }
    return this.props.children;
  }
}
export default ErrorBoundary;