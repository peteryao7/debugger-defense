import React from "react";

const AboutUs = () => {
  return (
    <div className="about-box">
      <div><h2>Get to know us!</h2></div>
      <div className="persons-box">
        <div className="about-person">
          <div>
            <h1 className="about-person-name">Sarah Peters</h1>
          </div>
          <div className="about-logos">
            <div className="github logo"
              onClick={() => window.open("https://github.com/kat-onyx")}>
            </div>
            <div className="linkedin logo"
              onClick={() => window.open("https://www.linkedin.com/in/sarah-peters-a2695b8a/")}>
            </div>
          </div>
        </div>
        <div className="about-person">
          <div>
            <h1 className="about-person-name">Skylar Prill</h1>
          </div>
          <div className="about-logos">
            <div className="github logo"
              onClick={() => window.open("https://github.com/L412")}>
            </div>
            <div className="linkedin logo"
              onClick={() => window.open("https://www.linkedin.com/in/shp1990/")}>
            </div>
          </div>
        </div>
        <div className="about-person">
          <div>
            <h1 className="about-person-name">Peter Yao</h1>
          </div>
          <div className="about-logos">
            <div className="github logo"
              onClick={() => window.open("https://github.com/peteryao7")}>
            </div>
            <div className="linkedin logo"
              onClick={() => window.open("https://www.linkedin.com/in/pyao7/")}>
            </div>
          </div>
        </div>
        <div className="about-person">
          <div>
            <h1 className="about-person-name">Peter Zeng</h1>
          </div>
          <div className="about-logos">
            <div className="github logo"
              onClick={() => window.open("https://github.com/pzengpzeng")}>
            </div>
            <div className="linkedin logo"
              onClick={() => window.open("https://www.linkedin.com/in/pzengpzeng/")}>
            </div>
          </div>
        </div>
      </div>
      <div className="about-story">
        <p>Interested in exploring both the MERN stack and game production, the four of us set out to create an interactive (and competitive!) browser experience. By harnessing the power of the React/Redux cycle in tandem with JavaScript and HTML’s canvas, we were able to create the typing thriller that you see here today. Enjoy!</p>
      </div>
    </div>
  )
};

export default AboutUs;