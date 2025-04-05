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
        Hi, I’m Dan Amar, a cybersecurity analyst with a deep curiosity for
        technology and a strong foundation in threat analysis, vulnerability
        assessment, and incident response. With hands-on experience in tools
        like Wireshark, SIEM platforms, and network security protocols, I’m
        passionate about building secure, resilient systems in an ever-evolving
        digital landscape. But beyond the tech, I’m someone who finds energy and
        inspiration through exploring the world, staying active, and looking
        up—literally. Traveling has shaped my perspective, astronomy keeps me
        curious about the vast unknown, and physical health grounds me in
        discipline and self-improvement. These passions fuel my work ethic and
        creativity, helping me bring a thoughtful, well-rounded approach to
        everything I do. Whether I’m analyzing packets or planning my next
        adventure, I’m driven by a passion for learning, discovery, and
        meaningful impact.
      </p>
    </section>
  );
};

export default AboutMe;
