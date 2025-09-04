import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am <b className="purple">Vishal Singh</b>, a{" "}
              <b className="purple">Machine Learning Engineer</b> and{" "}
              <b className="purple">published researcher</b> passionate about
              building AI-driven systems that solve real-world problems. 🚀
              <br />
              <br />
              I have hands-on experience with{" "}
              <b className="purple">Machine Learning, Deep Learning, NLP, and Neural Networks</b>, 
              working on projects like phishing detection, music genre classification, 
              sentiment analysis, and medical image diagnosis.
              <br />
              <br />
              Skilled in programming languages like{" "}
              <i>
                <b className="purple"> Python, C/C++, and MySQL </b>
              </i>{" "}
              with strong knowledge of{" "}
              <i>
                <b className="purple">
                  TensorFlow, PyTorch, Pandas, NumPy, Matplotlib, and Seaborn
                </b>
              </i>.
              <br />
              <br />
              I also build and deploy AI solutions using{" "}
              <b className="purple">Flask, Git/GitHub, and cloud tools (AWS)</b>.
              <br />
              <br />
              I am passionate about{" "}
              <b className="purple">
                explainable AI, cybersecurity applications of ML, and scalable intelligent systems
              </b>
              . ✨
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/VISHAL-0805"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/vishal-singh-upes"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:vishalsingh08052003@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram /> {/* replace with mail/other icon */}
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
