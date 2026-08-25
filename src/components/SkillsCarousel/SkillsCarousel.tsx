import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import styles from "./SkillsCarousel.module.css";

const skills = [
    "C#",
    ".NET",
    "ASP.NET Core",
    "Entity Framework Core",
    "MySQL",
    "Docker",
    "Git",
    "React",
    "TypeScript",
    "JavaScript",
    "Figma",
    "Nginx",
    "Linux",
    "Node.js",
    "Sequelize",
    "Jest",
    "HTML",
    "CSS",
    "xUnit",
    "MongoDB",
    "FTTH",
    "OAuth",
    "JWT",
    "TCP/IP",
    "AutoMapper",
    "OLT Huawei",
    "Express",
    "Selenium",
    "Tailwind CSS",
    "Postman",
];

function SkillsCarousel() {
    const [emblaRef] = useEmblaCarousel(
        {
            loop: true,
            align: "start",
        },
        [
            AutoScroll({
                playOnInit: true,
                speed: 1,
                stopOnInteraction: false,
            }),
        ]
    );

    return (
        <div className={styles.carousel} ref={emblaRef}>
            <div className={styles.container}>
                {skills.map((skill) => (
                    <div className={styles.slide} key={skill}>
                        <span className={styles.skill}>
                            {skill}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SkillsCarousel;