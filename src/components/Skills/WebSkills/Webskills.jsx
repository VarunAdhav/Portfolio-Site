import Cards from "../Cards";

function WebSkills() {
  const skills = [
    { title: "HTML", level: "Intermediate" },
    { title: "CSS", level: "Intermediate" },
    { title: "EJS", level: "Basic" },
    { title: "JavaScript", level: "Intermediate" },
    { title: "React JS", level: "Basic" },
    { title: "Express", level: "Basic" },
  ];
  function mapSkills(skill) {
    console.log(skill);
    return <Cards title={skill.title} level={skill.level} />;
  }
  return (
    <div class="details-container">
      <h2 class="experience-sub-title">Web Development</h2>
      <div class="article-container">{skills.map(mapSkills)}</div>
    </div>
  );
}

export default WebSkills;
