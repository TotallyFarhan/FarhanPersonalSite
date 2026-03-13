import './App.css'

import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';

import linkedinLogo from "./assets/linkedin.png";
import githubLogo from "./assets/github.png";
import emailLogo from "./assets/mail.png";
import headshot from "./assets/portrait.jpg";
import arrow from "./assets/arrow.png";

function App() {

  return (
    <div className="min-h-screen bg-[#191C40] text-white overflow-x-hidden ">
      <div className="fixed top-0 left-0 w-full bg-[#B29758] shadow-md z-50">
        <div className="mx-auto max-w-7xl flex h-16 items-center justify-between px-6 md:px-12 lg:px-20 text-[#404472]">
          <a href="#landing"><h3 className="text-xl font-semibold">Farhan Uddin</h3></a>
          <div className="hidden md:flex items-center gap-10 text-lg font-medium">
            <a href="#experience"><h4 className="cursor-pointer hover:opacity-80">Experience</h4></a>
            <a href="#projects"><h4 className="cursor-pointer hover:opacity-80">Projects</h4></a>
            <a href="#skills"><h4 className="cursor-pointer hover:opacity-80">Skills</h4></a>
            <a href="#contact"><h4 className="cursor-pointer hover:opacity-80">Contact</h4></a>
          </div>
        </div>
      </div>
      <div className="mx-auto min-w-screen overflow-x-hidden max-w-7xl px-6 md:px-12 lg:px-20 flex flex-col items-center">
        <div id="landing" className="h-[90vh] flex items-center justify-center pt-20">
          <div className="mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-16 max-w-7xl w-full">

            <div className="max-w-xl text-center md:text-left">
              <h1 className="text-6xl font-bold text-[#B29758]">Farhan Uddin</h1>
              <h3 className="text-2xl font-semibold text-white mt-2">
                Computer Science @ Virginia Tech
              </h3>

              <p className="text-lg text-gray-300 mt-2">
                Currently a Junior, interested in full stack development and data science/ML!
              </p>

              <div className="flex justify-center md:justify-start gap-6 pt-4">
                <img src={linkedinLogo} className="h-10 w-10 rounded-md p-2 transition hover:scale-110 cursor-pointer" />
                <img src={githubLogo} className="h-10 w-10 rounded-md p-2 transition hover:scale-110 cursor-pointer" />
                <img src={emailLogo} className="h-10 w-10 rounded-md p-2 transition hover:scale-110 cursor-pointer" />
              </div>
            </div>

            <div className="flex justify-center">
              <img
                src={headshot}
                className="w-56 h-56 md:w-80 md:h-80 rounded-full object-cover shadow-xl"
              />
            </div>

          </div>

        </div>

        <div className="flex justify-center animate-bounce pb-8">
          <img src={arrow} className="h-10 w-10" />
        </div>

        <div id="experience" className="py-12">
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
          <div className="max-w-7xl mx-auto flex flex-col gap-10">
            <div className="flex flex-col md:flex-row items-center md:justify-between gap-4 bg-[#7680A3] text-white px-10 py-8 rounded-xl text-2xl">
              <span>Email</span>
              <a href="mailto:farhanuddin@vt.edu">
                <span className="hover:underline hover:opacity-90">farhanuddin@vt.edu</span>
              </a>
            </div>
            <div className="flex flex-col md:flex-row items-center md:justify-between gap-4 bg-[#7680A3] text-white px-10 py-8 rounded-xl text-2xl">
              <span>GitHub</span>
              <a href="https://www.github.com/TotallyFarhan">
                <span className="hover:underline hover:opacity-90">github.com/TotallyFarhan</span>
              </a>
            </div>
            <div className="flex flex-col md:flex-row items-center md:justify-between gap-4 bg-[#7680A3] text-white px-10 py-8 rounded-xl text-2xl">
              <span>LinkedIn</span>
              <a href="https://www.linkedin.com/in/uddinfarhan/">
                <span className="hover:underline hover:opacity-90">linkedin.com/in/uddinfarhan/</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default App
