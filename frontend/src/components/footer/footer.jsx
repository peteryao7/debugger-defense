import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div 
          onClick={() => this.props.openModal("about")}
          className="about-us">
          About Us
        </div>
      </div>
    )
  }
};

export default Footer;