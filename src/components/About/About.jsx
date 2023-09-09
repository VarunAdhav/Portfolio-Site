import "./About.css";
function About() {
  return (
    <section id="about">
      <div className="aboutContainer">
        <div className="top">
          <p className="intro">Welcome To</p>
          <p className="aboutMe">About Me</p>
        </div>
        <div className="detailsContainer">
          <img
            className="profilePic"
            src="https://preview.redd.it/hq1m30rh14171.jpg?auto=webp&s=f95c5c949eea9843af22e68cb23ea569b35747d2"
            alt="profile pic"
          />
          <div className="details">
            <p>
              A passionate programmer with aspirations of becoming a full-stack
              developer, dedicated to crafting innovative and seamless digital
              solutions.
            </p>
            <div className="edu">
              <img
                src="https://img.icons8.com/?size=64&id=79387&format=png"
                alt="education"
              />
              <h3>B.E. Computer Science and Engineering</h3>
              <p>2020-2024</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;
