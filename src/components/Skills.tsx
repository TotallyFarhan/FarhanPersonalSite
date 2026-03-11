function Skills() {

    const languagues: string[] = ["JavaScript", "Java", "Python", "TypeScript", "HTML", "CSS", "SQL", "C", "C#", "C++", "Assembly", "Bash"]
    const technologies: string[] = ["React", "Flask", "Node.js", "FastAPI", "Express.js", "MySQL", "MongoDB", "Tailwind", "Shadcn", "JUnit"]
    const tools: string[] = ["Docker", "Git", "AWS", "Anaconda", "Spyder", "Postman", "Figma", "Raspberry Pi", "Arduino"]

    return (
        <div>
            <h3>Programming Languagues</h3>
            {
                languagues.map((language: string) => {
                    return (
                        <span>{language}</span>
                    );
                })
            }
            <h3>Technologies and Frameworks</h3>
            {
                technologies.map((technology: string) => {
                    return (
                        <span>{technology}</span>
                    );
                })
            }
            <h3>Tools and Software</h3>
            {
                tools.map((tool: string) => {
                    return (
                        <span>{tool}</span>
                    );
                })
            }

        </div>
    )
}

export default Skills
