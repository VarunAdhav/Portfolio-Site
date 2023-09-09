import Cards from "../Cards";
function ProgrammingSkills() {
  const skills = [
    { title: "C++", level: "Intermediate" },
    { title: "Python", level: "Intermediate" },
    { title: "Java", level: "Basic" },
    { title: "C", level: "Intermediate" },
    // { title: "React", level: "Basic" },
    // { title: "Express", level: "Basic" },
  ];
  function mapSkills(skill) {
    console.log(skill);
    return <Cards title={skill.title} level={skill.level} />;
  }
  return (
    <div class="details-container">
      <h2 class="experience-sub-title">Programming</h2>
      <div class="article-container">
        {skills.map(mapSkills)}
      </div>
    </div>
  );
}
export default ProgrammingSkills;
