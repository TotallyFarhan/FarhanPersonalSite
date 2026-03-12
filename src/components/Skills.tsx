function Skills() {

    const languagues: string[] = ["JavaScript", "Java", "Python", "TypeScript", "HTML", "CSS", "SQL", "C", "C#", "C++", "Assembly", "Bash"]
    const technologies: string[] = ["React", "Flask", "Node.js", "FastAPI", "Express.js", "MySQL", "MongoDB", "Tailwind", "Shadcn", "JUnit"]
    const tools: string[] = ["Docker", "Git", "AWS", "Anaconda", "Spyder", "Postman", "Figma", "Raspberry Pi", "Arduino"]

    return (
        <div className="py-20">
            <div className="max-w-6xl mx-auto px-6">
                <h1 className="text-4xl font-bold text-[#B29758] text-center mb-16">Skills</h1>
                <div className="mb-14">
                    <h3 className="text-xl font-semibold text-white mb-6">Programming Languagues</h3>


                    <div className="flex flex-wrap gap-4">
                        {
                            languagues.map((language: string) => {
                                return (
                                    <span key={language}
                                        className="bg-[#B29758] text-white px-5 py-2 rounded-lg text-sm font-medium">{language}</span>
                                );
                            })
                        }
                    </div>
                </div>
                <div className="mb-14">
                    <h3 className="text-xl font-semibold text-white mb-6">Technologies and Frameworks</h3>
                    <div className="flex flex-wrap gap-4">
                        {
                            technologies.map((technology: string) => {
                                return (
                                    <span key={technology}
                                        className="bg-[#B29758] text-white px-5 py-2 rounded-lg text-sm font-medium">{technology}</span>
                                );
                            })
                        }
                    </div>
                </div>
                <div className="mb-14">
                    <h3 className="text-xl font-semibold text-white mb-6">Tools and Software</h3>
                    <div className="flex flex-wrap gap-4">
                        {
                            tools.map((tool: string) => {
                                return (
                                    <span key={tool}
                                        className="bg-[#B29758] text-white px-5 py-2 rounded-lg text-sm font-medium">{tool}</span>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
