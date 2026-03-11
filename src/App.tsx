import './App.css'

import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';

import linkedinLogo from "./assets/linkedin.png";
import githubLogo from "./assets/github.png";
import emailLogo from "./assets/mail.png";
import headshot from "./assets/portrait.jpg";

function App() {

  return (
    <>
      <div className="navbar">
        <h3 id="topleft">Farhan Uddin</h3>
        <h4 className="pagelinks">Experience</h4>
        <h4 className="pagelinks">Projects</h4>
        <h4 className="pagelinks">Skills</h4>
        <h4 className="pagelinks">Contact</h4>
      </div>
      <div className="landing">
        <h1>Farhan Uddin</h1>
        <h3>Computer Science @ Virginia Tech</h3>
        <p>Currently a Junior, interested in full stack development and data science/ML!</p>
        <div>
          <img src={linkedinLogo} />
          <img src={githubLogo} />
          <img src={emailLogo} />
        </div>
        <img src={headshot} />
        <img src="" />
      </div>
      <div className="experience">
        <h2>Work Experience</h2>
        <Experience />
      </div>
      <div className="projects">
        <h2>Projects</h2>
        <Projects />
      </div>
      <div className="skills">
        <h2>Skills</h2>
        <Skills />
      </div>
      <div className="contact">
        <h2>Contact</h2>
        <div>
          <span>Email</span>
          <a href="mailto:farhanuddin@vt.edu"><span>farhanuddin@vt.edu</span></a>
        </div>
        <div>
          <span>GitHub</span>
          <a href="https://www.github.com/TotallyFarhan"><span>github.com/TotallyFarhan</span></a>
        </div>
        <div>
          <span>LinkedIn</span>
          <a href="https://www.linkedin.com/in/uddinfarhan/"><span>linkedin.com/in/uddinfarhan/</span></a>
        </div>
      </div>
    </>
  )
}

export default App
