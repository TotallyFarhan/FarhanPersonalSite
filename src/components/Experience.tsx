import amazonLogo from "../assets/amazonlogo.jpg";
import bitsLogo from "../assets/bitslogo.jpg";
import humeLogo from "../assets/humecenterlogo.png";
import roboticsLogo from "../assets/2068logo.jpg";
import novaLogo from "../assets/novalogo.png";
import mgtaLogo from "../assets/mgtalogo.png";
import ssLogo from "../assets/schoolsimplifiedlogo.jpg";

function Experience() {
    type Role = {
        position: string
        date: string
        description: string[]
    }
    type WorkExperience = {
        company: string,
        roles: Role[]
        image: string
    }

    const workExperiences: WorkExperience[] = [
        {
            company: "Amazon",
            image: amazonLogo,
            roles: [
                {
                    position: "Software Development Engineering Intern",
                    date: "Jun 2026 - Aug 2026",
                    description: [
                        "Incoming Summer 2026!",
                        "Working on AWS EC2 Team"
                    ]
                }
            ]
        },
        {
            company: "Building Impactful Tech with Students",
            image: bitsLogo,
            roles: [
                {
                    position: "Treasurer",
                    date: "Jan 2026 - Present",
                    description: [
                        "Oversee the organization’s bank account and manage club funds",
                        "Submit budget funding requests for project costs (Dev Licenses, Deployment)",
                        "Pursue and attain fundraising and sponsorship opportunities"
                    ]
                },
                {
                    position: "Project Lead",
                    date: "Dec 2025 - Present",
                    description: [
                        "Manage team of 6 front and backend engineers in the development of the project MusIQ",
                        "Own software architecture and design decisions; author and maintain a living design document that records system decisions",
                        "Lead weekly team meetings to review progress, assign tasks, and coordinate development"
                    ]
                }
            ]
        },
        {
            company: "Hume Center for National Security and Technology @ Virginia Tech",
            image: humeLogo,
            roles: [
                {
                    position: "Software Team",
                    date: "Sep 2025 - Present",
                    description: [
                        "Building autonomous UAV/UGV systems for GPS-denied navigation",
                        "Developing ROS-based perception and control with SLAM"
                    ]
                },
                {
                    position: "Product Owner",
                    date: "Sep 2025 - Present",
                    description: [
                        "Lead Agile subteam coordination for timely system integration and managing deadlines for tasks"
                    ]
                }
            ]
        },
        {
            company: "Hume Center for National Security and Technology @ Virginia Tech",
            image: humeLogo,
            roles: [
                {
                    position: "Undergraduate Software Engineering Researcher",
                    date: "Sep 2024 - Feb 2025",
                    description: [
                        "Created flight and data software in C++ for Lunar Radiation Data Analysis Experiment (LDRX)",
                        "Developed main loop of software to collect sensor data and perform health/status checks for flight system",
                        "Wrote I/O Multiplexer Drivers to allow reading and writing of data from IO ports of ATmegaS128 microcontroller",
                        "Utilized algorithms to use converted parsed ADC voltage data to temperature values",
                        "Participated in agile sprints with 12-member team weekly to discuss project progress and improvements"
                    ]
                }
            ]
        },
        {
            company: "2068 Metal Jackets FRC Robotics Team",
            image: roboticsLogo,
            roles: [
                {
                    position: "Vice Presidnet",
                    date: "Aug 2023 - May 2024",
                    description: [
                        "Supported and managed team budget of over $80,000 on 60+ member team for registration for competitions, machinery and necessary tools and materials"
                    ]
                },
                {
                    position: "Software Lead",
                    date: "Aug 2020 - May 2024",
                    description: [
                        "Programmed in Java using WPILib library for robotics software for for 120 lb. robot",
                        "Mentored team of 6 programmers on developing and testing robot subsystems",
                        "Enhanced robot mechanisms by 30% using gyroscopes, LiDAR, motor controllers, Limelight Smart Camera, and computer boards",
                        "Achieved a top 17% global ranking, landing a position in the FRC World Championship in Houston, Texas"
                    ]
                }
            ]
        },
        {
            company: "Northern Virginia Community College",
            image: novaLogo,
            roles: [
                {
                    position: "NOVASTEM Teacher Assistant",
                    date: "June 2023 - June 2024",
                    description: [
                        "Taught 50+ middle school students wiring and programming with Arduino/Raspberry Pi",
                        "Managed attendance and engagement, coordinated program logistics",
                        "Enhanced course curriculum with new lesson plans"
                    ]
                }
            ]
        },
        {
            company: "Mason Game and Tech Academy",
            image: mgtaLogo,
            roles: [
                {
                    position: "Machine Learning Teacher Assistant",
                    date: "Sep 2024 - Feb 2025",
                    description: [
                        "Supported 20+ high school students by teaching Python and Machine Learning concepts",
                        "Assisted with projects help and managing classroom organization",
                        "Presented lessons on algorithms and ML frameworks/libraries."
                    ]
                }
            ]
        },
        {
            company: "School Simplified",
            image: ssLogo,
            roles: [
                {
                    position: "Software Engineer",
                    date: "Jan 2022 - Feb 2023",
                    description: [
                        "Developed multi-platform React/TypeScript web pages with ChakraUI for School Simplified, a study resource platform serving 500k+ students worldwide",
                        "Contributed to the creative design and development process of 12 web pages on the application",
                        "Participated in weekly Agile standups to review sprint progress and coordinate task assignments with the team."
                    ]
                }
            ]
        },
    ]

    return (
        <>
            {
                workExperiences.map((exp: WorkExperience) => {
                    return (
                        <div>
                            <h3>{exp.company}</h3>
                            <img src={exp.image} />

                            {
                                exp.roles.map((role: Role) => {
                                    return (
                                        <div>
                                            <h4>{role.position}</h4>
                                            <h4>{role.date}</h4>
                                            <ul>
                                                {
                                                    role.description.map((bullet: string) => {
                                                        return (
                                                            <li>{bullet}</li>
                                                        );
                                                    })
                                                }
                                            </ul>
                                        </div>
                                    );
                                })
                            }

                        </div>
                    );
                })
            }
        </>
    )
}

export default Experience
