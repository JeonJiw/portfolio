import { Container, Col, Row } from "react-bootstrap";
import java from "../assets/img/java.svg";
import javascript from "../assets/img/javascript.svg";
import typescript from "../assets/img/typescript.svg";
import cpp from "../assets/img/cpp.svg";
import csharp from "../assets/img/csharp.svg";
import html from "../assets/img/html.png";
import css from "../assets/img/css3.svg";
import nestjs from "../assets/img/nest.png";
import nodejs from "../assets/img/nodejs.svg";
import react from "../assets/img/react.svg";
import docker from "../assets/img/docker.svg";
import git from "../assets/img/git.svg";
import github from "../assets/img/github.svg";
import kotlin from "../assets/img/kotlin.svg";
import mongodb from "../assets/img/mongodb.svg";
import mysql from "../assets/img/mysql.svg";
import amazon from "../assets/img/amazon.svg";

export const Skills = () => {
  const programmingLanguages = [
    { src: java, alt: "Java" },
    { src: javascript, alt: "JavaScript" },
    { src: typescript, alt: "TypeScript" },
    { src: cpp, alt: "C++" },
    { src: csharp, alt: "C#" },
    { src: html, alt: "HTML" },
    { src: css, alt: "CSS" },
    { src: kotlin, alt: "Kotlin" },
  ];

  const webAppDevelopments = [
    { src: react, alt: "React" },
    { src: nestjs, alt: "NestJS" },
    { src: nodejs, alt: "Node.js" },
    { src: docker, alt: "Docker" },
    { src: mongodb, alt: "MongoDB" },
    { src: mysql, alt: "MySQL" },
    { src: git, alt: "Git" },
    { src: github, alt: "GitHub" },
    { src: amazon, alt: "Amazon" },
  ];

  return (
    <section className="skill" id="skills">
      <Container>
        <div className="skill-bx">
          <h2>Skills</h2>
          <div className="skill-tb">
            <div className="skill-pl">
              <p className="skill-header">Programming Languages</p>
              <div className="skill-section d-flex flex-wrap justify-content-center">
                {programmingLanguages.map((skill, index) => (
                  <div
                    key={index}
                    className="skill-icon d-flex flex-column align-items-center"
                  >
                    <img src={skill.src} alt={skill.alt} className="icon-img" />
                    <span className="skill-name">{skill.alt}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="skill-dev">
              <p className="skill-header">Web / App Developments</p>
              <div className="skill-section d-flex flex-wrap justify-content-center">
                {webAppDevelopments.map((skill, index) => (
                  <div
                    key={index}
                    className="skill-icon d-flex flex-column align-items-center"
                  >
                    <img src={skill.src} alt={skill.alt} className="icon-img" />
                    <span className="skill-name">{skill.alt}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
