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
        <>
            {
                projects.map((project: Project) => {
                    return (
                        <div>
                            <img src={project.image} />
                            <h3>{project.name}</h3>
                            <span>{project.status}</span>
                            <p>{project.description}</p>
                            {
                                project.technologies.map((technology: string) => {
                                    return (
                                        <div>
                                            <span>{technology}</span>
                                        </div>
                                    );
                                })
                            }
                            <a href={project.github} target="_blank" rel="noopener noreferrer"><button>Source</button></a>
                            {
                                project.link.length > 0 && (
                                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                                        <button>Link</button>
                                    </a>
                                )
                            }
                        </div>
                    );
                })
            }
        </>
    )
}

export default Projects
