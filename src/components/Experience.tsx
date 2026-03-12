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
            <h1 className="flex justify-center text-xl font-bold text-[#B29758] pt-15 pb-10">Work Experience</h1>
            <div className="experience-scroll relative max-w-5xl mx-auto border border-[#B29758] rounded-3xl p-10 h-175 overflow-y-auto pr-10">
                <div className="relative p-1">
                    <div className="absolute left-16 top-0 bottom-0 w-0.5 bg-[#B29758]"></div>

                    {
                        workExperiences.map((exp: WorkExperience) => {
                            return (
                                <div className="grid grid-cols-[120px_1fr] gap-6 py-3">
                                    <div className="flex justify-center">
                                        <img src={exp.image} className="w-20 h-20 rounded-full object-cover bg-white z-10 shadow-lg" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-3xl">{exp.company}</h3>
                                        {
                                            exp.roles.map((role: Role) => {
                                                return (
                                                    <div className="mt-2">
                                                        <div className="flex justify-between text-gray-300">
                                                            <h4 className="font-medium text-xl">{role.position}</h4>
                                                            <span className="italic text-lg">{role.date}</span>
                                                        </div>
                                                        <ul className="list-disc ml-6 mt-1 text-sm">
                                                            {
                                                                role.description.map((bullet: string) => {
                                                                    return (
                                                                        <li className="p-0.5 text-md">{bullet}</li>
                                                                    );
                                                                })
                                                            }
                                                        </ul>
                                                    </div>
                                                );
                                            })
                                        }
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Experience
