import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar">
      <div>
        <p className="header-name">Ayhaam Baksh</p>
      </div>
      <div className="header-center">
        <NavLink to="/" className="nav-item" activeclassname="active">
          Home
        </NavLink>
        <NavLink to="/projects" className="nav-item" activeclassname="active">
          Projects
        </NavLink>
        <NavLink to="/contact" className="nav-item" activeclassname="active">
          Contact
        </NavLink>
      </div>
      <div>
        <a
          className="resume-container"
          href="/ayhaam-resume.pdf"
          download="ayhaam-resume.pdf"
        >
          <div className="resume-link">
            <p className="resume-download">Download Resume</p>
            <img className="resume-icon"></img>
          </div>
        </a>
      </div>
    </nav>
  );
};

export default Header;
