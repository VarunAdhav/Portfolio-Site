import Cards from "../Cards";

function Tools() {
  const skills = [
    { title: "Photography", level: "Intermediate" },
    { title: "Photoshop", level: "Intermediate" },
    { title: "Lightroom", level: "Intermediate" },
  ];
  function mapSkills(skill) {
    console.log(skill);
    return <Cards title={skill.title} level={skill.level} />;
  }
  return (
    <div class="details-container">
      <h2 class="experience-sub-title">Other</h2>
      <div class="article-container">{skills.map(mapSkills)}</div>
    </div>
  );
}

export default Tools;
