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
    <div className="min-h-screen bg-[#191C40] text-white">
      <div className="fixed top-0 left-0 w-full bg-[#B29758] shadow-md z-50">
        <div className="mx-auto flex h-16 max-w-screen items-center justify-between px-8 text-[#404472]">
          <a href="#landing"><h3 className="text-xl font-semibold">Farhan Uddin</h3></a>
          <div className="flex items-center gap-10 text-lg font-medium">
            <a href="#experience"><h4 className="cursor-pointer hover:opacity-80">Experience</h4></a>
            <a href="#projects"><h4 className="cursor-pointer hover:opacity-80">Projects</h4></a>
            <a href="#skills"><h4 className="cursor-pointer hover:opacity-80">Skills</h4></a>
            <a href="#contact"><h4 className="cursor-pointer hover:opacity-80">Contact</h4></a>
          </div>
        </div>
      </div>
      <div id="landing" className="min-h-screen flex items-center px-10 py-20">
        <div className="mx-auto flex w-full max-w-screen items-center justify-between">

          <div className="max-w-xl">
            <h1 className="text-6xl font-bold text-[#B29758]">Farhan Uddin</h1>
            <h3 className="text-2xl font-semibold text-white mt-2">
              Computer Science @ Virginia Tech
            </h3>

            <p className="text-lg text-gray-300 mt-2">
              Currently a Junior, interested in full stack development and data science/ML!
            </p>

            <div className="flex gap-6 pt-4">
              <img src={linkedinLogo} className="h-10 w-10 rounded-md p-2 transition hover:scale-110 cursor-pointer" />
              <img src={githubLogo} className="h-10 w-10 rounded-md p-2 transition hover:scale-110 cursor-pointer" />
              <img src={emailLogo} className="h-10 w-10 rounded-md p-2 transition hover:scale-110 cursor-pointer" />
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src={headshot}
              className="h-80 w-80 rounded-full object-cover shadow-xl"
            />
          </div>

        </div>
      </div>
      <div id="experience" className="py-24">
        <Experience />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="contact" className="py-24 px-6">
        <h2 className="text-5xl font-bold text-[#B29758] text-center mb-16">Contact</h2>
        <div className="max-w-6xl mx-auto flex flex-col gap-10">
          <div className="flex items-center justify-between bg-[#7680A3] text-white px-10 py-8 rounded-xl text-2xl">
            <span>Email</span>
            <a href="mailto:farhanuddin@vt.edu">
              <span className="hover:underline hover:opacity-90">farhanuddin@vt.edu</span>
            </a>
          </div>
          <div className="flex items-center justify-between bg-[#7680A3] text-white px-10 py-8 rounded-xl text-2xl">
            <span>GitHub</span>
            <a href="https://www.github.com/TotallyFarhan">
              <span className="hover:underline hover:opacity-90">github.com/TotallyFarhan</span>
            </a>
          </div>
          <div className="flex items-center justify-between bg-[#7680A3] text-white px-10 py-8 rounded-xl text-2xl">
            <span>LinkedIn</span>
            <a href="https://www.linkedin.com/in/uddinfarhan/">
              <span className="hover:underline hover:opacity-90">linkedin.com/in/uddinfarhan/</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
