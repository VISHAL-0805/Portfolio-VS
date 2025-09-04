import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import GAIT from "../../Assets/Projects/GAIT.png";
import ETS from "../../Assets/Projects/ETS.png";
import DEEPSORT from "../../Assets/Projects/DEEPSORT.jpg";
import PTS from "../../Assets/Projects/PTS.png";

// You can replace these placeholders with actual images for your projects

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some of the key projects I have worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* PhishGuard AI */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DEEPSORT}
              isBlog={false}
              title="PhishGuard AI"
              description="Engineered an AI-powered phishing detection and summarization system using BiLSTM and BERT, achieving 97.22% accuracy on 149K+ emails. Integrated SPF/DKIM/DMARC checks for authenticity and explainable AI for analyst efficiency."
              // ghLink="https://github.com/yourusername/phishguard" // optional
            />
          </Col>

          {/* Sentiment Analysis */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DEEPSORT}
              isBlog={false}
              title="Customer Sentiment Analysis"
              description="Developed a sentiment analysis system for restaurant reviews with RandomForest, achieving 89% accuracy. Built dashboards using Matplotlib/Seaborn and deployed an interactive web app with Flask, HTML, and CSS."
              // ghLink="https://github.com/yourusername/sentiment-analysis"
            />
          </Col>

          {/* Music Genre Classification */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DEEPSORT}
              isBlog={false}
              title="Music Genre Classification"
              description="Designed a system leveraging CNN and KNN for audio-based genre classification. Achieved 98% training accuracy (CNN) and 73% test accuracy (KNN). Published research at ISMS 2023 under Dr. Tanupriya Choudhury."
              // ghLink="https://github.com/yourusername/music-genre-classification"
            />
          </Col>

          {/* Lung Cancer Detection */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DEEPSORT}
              isBlog={false}
              title="Lung Cancer Detection"
              description="Built a CNN-based system to classify lung X-rays into normal, benign, and malignant. Enhanced accuracy through preprocessing, augmentation, and hyperparameter tuning, supporting early cancer detection."
              // ghLink="https://github.com/yourusername/lung-cancer-detection"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;



