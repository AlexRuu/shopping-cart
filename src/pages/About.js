import React from "react";
import sitting from "../images/sitting.jpg";

const About = () => {
  return (
    <section className="about-section">
      <div>
        <img src={sitting} alt="sitting" className="sitting" />
      </div>
      <div className="blurb">
        <h1>About Me</h1>
        <p>
          Hello everyone, I'm Claire! I'm just an artist bringing her ideas to
          life, one art work at a time. I'm super excited to share my work with
          you all, so take your time and enjoy your stay! Treat it as an online
          art gallery of a sort!
        </p>
        <p>
          I love working with all sorts of mediums, so you'll notice quite a
          variety here, some being one of a kind! All works are original and
          inspired by my experience and everyday surrounding. Hope you find
          something you like during your stay!
        </p>
      </div>
    </section>
  );
};

export default About;
