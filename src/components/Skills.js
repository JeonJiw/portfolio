import { Container } from "react-bootstrap";
import colorsharp from "../assets/img/color-sharp.png";
import { programmingLanguages, webAppDevelopments } from "../SkillsData";

export const Skills = () => {
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
                    <img
                      src={skill.src}
                      alt={skill.name}
                      className="icon-img"
                    />
                    <span className="skill-name">{skill.name}</span>
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
                    <img
                      src={skill.src}
                      alt={skill.name}
                      className="icon-img"
                    />
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <img className="background-image-left" src={colorsharp} alt="Image" />
      </Container>
    </section>
  );
};
