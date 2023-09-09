import ProgrammingSkills from "./Programming/Programming";
import Tools from "./Tools/Tools";
import WebSkills from "./WebSkills/Webskills";
import "./skills.css";
function Skills() {
  return (
    <section id="skills">
      <p class="section__text__p1">My</p>
      <h1 class="title">Skills</h1>
      <div class="experience-details-container">
        <div class="about-containers">
          <WebSkills />
          <ProgrammingSkills />
          <Tools />
        </div>
      </div>
    </section>
  );
}
export default Skills;
