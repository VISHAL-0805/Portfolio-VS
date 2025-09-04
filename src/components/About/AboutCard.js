import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Vishal Singh</span> from{" "}
            <span className="purple">Dehradun, India.</span>
            <br />
            I am currently working as an{" "}
            <b className="purple">Assistant Machine Learning Engineer</b> at{" "}
            <span className="purple">Capsitech</span>, 
            where I engineer{" "}
            <b className="purple">AI-powered phishing detection</b> and{" "}
            <b className="purple">email summarization</b> systems.
            <br />
            <br />
            I Pursued my{" "}
            <b className="purple">B.Tech in Computer Science and Engineering</b>{" "}
            from University of Petroleum and Energy Studies (UPES), Dehradun,
            2021–2025 with a CGPA of 7.56.
            <br />
            <br />
            Apart from coding, research, and building AI systems, here are some
            activities I enjoy!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring AI/ML research and security innovations
            </li>
            <li className="about-activity">
              <ImPointRight /> Working on personal ML/DL projects
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing games & solving LeetCode problems
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling & photography
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Building intelligent and secure AI systems to solve real-world problems!"
          </p>
          <footer className="blockquote-footer">Vishal Singh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
