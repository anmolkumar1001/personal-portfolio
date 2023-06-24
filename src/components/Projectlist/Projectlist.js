import React from "react";
import "../../pages/style.css";
import ProjectCard from "./ProjectCard";
import { Container, Row, Col } from "react-bootstrap";
import gymmanagement from "../../Assets/admin.png";
import uidesign from "../../Assets/UI Design4.png";
import quizapp from "../../Assets/quiz.jpg";
import musicwebsite from "../../Assets/login_png.jpg";
import texttospeechapp from "../../Assets/texttospeech.jpg";
import workoutapp from "../../Assets/workout.jpg";

function Projectlist() {
  return (
    <div className="projectbackground">
      <Container fluid className="project-section">
        <Container>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={gymmanagement}
                isBlog={false}
                title="Gym Management System"
                description="Gym Management System
                using HTML, CSS, JS, BOOTSTRAP, PHP and database MYSQL."
                ghLink="https://github.com/anmolkumar1001/Gym-Management-System"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={musicwebsite}
                isBlog={false}
                title="Music Website"
                description="Music Website using HTML, CSS, JAVASCRIPT, BOOTSTRAP and PHP."
                ghLink="https://github.com/anmolkumar1001/Online-Music-Website"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={uidesign}
                isBlog={false}
                title="UI Design"
                description="UI Design Using HTML And CSS With Video."
                ghLink="https://github.com/anmolkumar1001/UI-Design"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={quizapp}
                isBlog={false}
                title="Quiz App"
                description="Quiz App Using Andriod API and Kotlin Programming Language."
                ghLink="https://github.com/anmolkumar1001/QuizApp"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={texttospeechapp}
                isBlog={false}
                title="Text-To-Speech App"
                description="Text-To-Speech App Using Andriod API and Kotlin Programming Language."
                ghLink="https://github.com/anmolkumar1001/Text-To-Speech-App"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={workoutapp}
                isBlog={false}
                title="Workout App"
                description="Workout App Using Andriod API and Kotlin Programming Language."
                ghLink="https://github.com/anmolkumar1001/Workout-App"
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default Projectlist;
