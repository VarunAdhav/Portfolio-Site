import ProjectCard from "./Project Cards/ProjectCards";
import "./Projects.css";
function Projects() {
  const projects = [
    {
      title: "Patient History Manager",
      content: "",
    },
    {
      title: "Anonymous Blog WebSite",
      content: "",
    },
    {
      title: "Google Keep Clone",
      content: "",
    },
    {
      title: "IOT Based Smart Car Parking System",
      content: "",
    },
  ];
  function mapProjects(project) {
    return <ProjectCard title={project.title} content={project.content} />;
  }
  return (
    <div>
      <section id="projects">
        <div className="projectsDetails">
          <div className="top">
            <p className="intro">My</p>
            <h3 className="aboutMe">Projects</h3>
          </div>
          <div className="Projects">{projects.map(mapProjects)}</div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
