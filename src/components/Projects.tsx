import musiqImage from "../assets/musiq.webp";
import globalEatsImage from "../assets/globaleats.jpg";
import statsViewImage from "../assets/statsview.png";
import amplyticsImage from "../assets/amplytics.jpg";

function Projects() {

    type Project = {
        name: string,
        image: string,
        status: string,
        description: string,
        technologies: string[],
        github: string,
        link: string
    }

    const projects: Project[] = [
        {
            name: "MusIQ",
            image: musiqImage,
            status: "In Progress",
            description: "A project that gamifies learning sheet music and tone recognition through quizzes, leaderboards, and tools like an in-app tuner and sheet music to audio conversion.",
            technologies: ["React", "Flask", "MySQL", "Tone.js", "Shadcn", "TailwindCSS", "JWT"],
            github: "https://github.com/bitsatvt/music-app",
            link: ""
        },
        {
            name: "Global Eats",
            image: globalEatsImage,
            status: "Completed",
            description: "A recipe discovery app that detect fridge ingredients and recommend recipes based on available items and a chosen culture.",
            technologies: ["React", "FastAPI", "MongoDB", "TensorFlow", "YOLOv8", "TailwindCSS", "Gemini API"],
            github: "https://github.com/yadelg/VTHacksProj",
            link: ""
        },
        {
            name: "StatsView",
            image: statsViewImage,
            status: "Completed",
            description: "A web app that visualizes NFL quarterback statistics and lets users generate customizable charts comparing the top or bottom players by selected metrics.",
            technologies: ["React", "Flask", "Pandas", "Seaborn", "BeautifulSoup"],
            github: "https://github.com/TotallyFarhan/StatsView",
            link: "https://stats-view-two.vercel.app/"
        },
        {
            name: "Amplytics",
            image: amplyticsImage,
            status: "Completed",
            description: "Web app that scraped U.S. Bureau of Labor data and applied Linear Regression model to predict city-level electricity costs per kWh.",
            technologies: ["React", "Flask", "Pandas", "NumPy", "Sci-kit Learn", "BeautifulSoup"],
            github: "https://github.com/yadelg/VTHacksProject",
            link: ""
        },
    ]

    return (
        <div className="py-24 px-6">
            <h1 className="text-4xl font-bold text-[#B29758] text-center">Projects</h1>
            <div className="relative mx-auto rounded-3xl p-10 pr-10 max-w-5xl">
                
                <div className="grid gap-12 md:grid-cols-2 justify-items-center">
                    {
                        projects.map((project: Project) => {
                            return (
                                <div key={project.name}
                                    className="border border-[#B29758] rounded-3xl p-8 w-100 flex flex-col items-center text-center hover:scale-[1.02] transition">
                                    <img src={project.image} className="rounded-xl mb-6 w-80 h-40 object-cover" />
                                    <div className="flex items-center gap-3 mb-3">
                                        <h3 className="text-3xl font-bold text-white">{project.name}</h3>

                                        <span className={`px-3 py-1 rounded-md text-sm font-medium 
                                    ${project.status === "Completed"
                                                ? "bg-teal-500/30 text-teal-200"
                                                : "bg-red-500/30 text-red-200"
                                            }`}
                                        >
                                            {project.status}
                                        </span>
                                    </div>

                                    <p className="text-gray-300 mb-6">{project.description}</p>
                                    <div className="flex flex-wrap justify-center gap-2 mb-6">
                                        {
                                            project.technologies.map((technology: string) => {
                                                return (
                                                    <div>
                                                        <span key={technology}
                                                            className="bg-[#B29758] text-white px-3 py-1 rounded-md text-sm">{technology}</span>
                                                    </div>
                                                );
                                            })
                                        }
                                    </div>
                                    <div className="flex gap-4">
                                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                                            <button className="bg-[#717CA3] text-white px-6 py-2 rounded-md hover:bg-gray-400 transition">Source</button>
                                        </a>
                                        {
                                            project.link.length > 0 && (
                                                <a href={project.link} target="_blank" rel="noopener noreferrer">
                                                    <button className="bg-[#717CA3] text-white px-6 py-2 rounded-md hover:bg-gray-400 transition">Link</button>
                                                </a>
                                            )
                                        }
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Projects
