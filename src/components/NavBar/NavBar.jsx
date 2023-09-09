import "./NavBar.css";
function NavBar() {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">Varun</div>
        <div>
          <ul className="menu">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
export default NavBar;
