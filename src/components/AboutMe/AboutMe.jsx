import React from "react";
import SlotCounter from "react-slot-counter";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <section id="about-me">
      <h1>
        <SlotCounter
          value="About Me"
          animateOnVisible={{
            triggerOnce: false,
            rootMargin: "0px 0px -100px 0px",
          }}
          dummyCharacters={"JSKDJBE".split("")}
          duration={2}
        />
      </h1>
      <p>
        Hi, I’m Dan Amar. Let me try to get this right; I work as a Frontend Web developer, while studying Cybersecurity, while in pursuit of learning how to build software. Weird, right? Anyways, I hope you enjoy interacting with this website as much as i enjoyed making it. New updates coming soon!
      </p>
    </section>
  );
};

export default AboutMe;
