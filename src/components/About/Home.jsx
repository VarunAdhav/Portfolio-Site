import "./Home.css";

function Home() {
  return (
    <section id="home">
      <div className="left">
        <p>Hello , I am</p>
        <div className="name">
          <p>T Varun Adhavan</p>
        </div>
        <div className="description">
          <p>student</p>
        </div>
        <div className="socialIcons">
          <img
            src="https://img.icons8.com/?size=256&id=106562&format=png"
            alt="github"
            onClick={() => {
              window.open("https://github.com/VarunAdhav/");
            }}
          />
          <img
            src="https://img.icons8.com/?size=256&id=8808&format=png"
            alt="linedin"
            onClick={() => {
              window.open("https://www.linkedin.com/in/t-varun-adhavan/");
            }}
          />
        </div>
        <div className="buttons">
          <button
            onClick={() => {
              window.open(
                "https://drive.google.com/file/d/1R6JRbxa5IRX0wswGkJras02KZpp01iWd/view?usp=sharing"
              );
            }}>
            RESUME
          </button>
        </div>
      </div>
      <div className="pic">
        <img
          src="https://preview.redd.it/hq1m30rh14171.jpg?auto=webp&s=f95c5c949eea9843af22e68cb23ea569b35747d2"
          alt="Profile Pic"
        />
      </div>
      {/* <div className="arrowDown">
        <a href="#about">
          <img
            src="https://img.icons8.com/?size=58&id=ahobfTJIEHd8&format=png"
            alt="down arrow"
          />
        </a>
      </div> */}
    </section>
  );
}
export default Home;
