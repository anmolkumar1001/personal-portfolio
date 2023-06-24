import React from "react";
import "../../pages/style.css";
import { Container, Row, Col } from "react-bootstrap";
import Text from "../Homepage/Text";

import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";

import { FaLinkedinIn } from "react-icons/fa";

function Home() {
  return (
    <div className="homepagebackground">
      <Container>
        <Row>
          <Col md={7}>
            <h2 className="headtext">
              Hello <span className="wave">👋 </span>
            </h2>
            <h2 className="nametext">I'm Anmol Kumar</h2>
            <span></span>
            <Text />
            {/* <button
              onClick={() => {
                window.open("https://github.com/anmolkumar1001");
              }}
              className="socialmediabtn"
            >
              <AiFillGithub className="icon" />
            </button> */}
            <button
              onClick={() => {
                window.open(
                  "https://www.linkedin.com/in/anmol-kumar-734aa5209/"
                );
              }}
              className="socailmediabtn"
            >
              <FaLinkedinIn className="icon" />
            </button>
            <button
              onClick={() => {
                window.open("https://twitter.com/AnmolKumar5003");
              }}
              className="socailmediabtn"
            >
              <AiOutlineTwitter className="icon" />
            </button>
            <button
              onClick={() => {
                window.open("https://www.instagram.com/anmolkumar10_01/");
              }}
              className="socailmediabtn"
            >
              <AiFillInstagram className="icon" />
            </button>
          </Col>

          <Col md={5}>
            <div className="imagedeveloper"></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
