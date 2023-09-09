import "./ProjectCards.css";
function ProjectCard(props) {
  return (
    <div className="projectCards">
      <div className="container">
        <img
          src="https://149695847.v2.pressablecdn.com/wp-content/uploads/2020/01/top-10-DS-projects.png"
          alt="Project related pic"
        />
        <div className="projectDetails">
          <h3>{props.title}</h3>
          <p>{props.content}</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
