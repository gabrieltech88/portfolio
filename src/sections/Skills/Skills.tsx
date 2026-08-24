import SectionBackground from "@/components/SectionBackground/SectionBackground.tsx";
import styles from "./Skills.module.css";
import HeaderSection from "@/components/HeaderSection/HeaderSection.tsx";
import {
    FaLaptopCode,
    FaDocker,
    FaGitAlt,
    FaReact,
    FaFigma,
    FaLinux,
    FaNodeJs,
    FaHtml5,
    FaCss3Alt,
    FaRegObjectUngroup
} from "react-icons/fa";
import {LuAppWindow, LuRouter} from "react-icons/lu";
import {MdOutlineLayers} from "react-icons/md";
import {TbDatabase} from "react-icons/tb";
import {IoMdCloudOutline, IoMdCodeWorking, IoLogoJavascript} from "react-icons/io";
import {BiLogoTypescript} from "react-icons/bi";
import {BsCardChecklist, BsDiagram3} from "react-icons/bs";
import {TbBrandOauth} from "react-icons/tb";
import {
    SiNginx,
    SiSequelize,
    SiJest,
    SiMongodb,
    SiJsonwebtokens,
    SiHuawei,
    SiExpress,
    SiSelenium
} from "react-icons/si";
import {HiOutlineBadgeCheck} from "react-icons/hi";
import {PiFileCSharp} from "react-icons/pi";
import {FaRegMap} from "react-icons/fa6";
import CardSkill from "@/components/CardSkill/CardSkill.tsx";
import {GrMysql} from "react-icons/gr";
import Skill from "@/components/Skill/Skill.tsx";
import {RiTailwindCssFill} from "react-icons/ri";


function Skills() {
    const skillsForCards = [
        {
            icon: <FaLaptopCode size={20}/>,
            title: "Backend",
            content: "Desenvolvimento de APIs, regras de\n" +
                "negócio, autenticação, integrações e\n" +
                "aplicações escaláveis.",
            skills: [
                "C#",
                ".NET",
                "ASP.NET CORE",
                "Node.js",
                "Express.js",
            ]
        },
        {
            icon: <LuAppWindow size={20}/>,
            title: "Frontend",
            content: "Construção de interfaces modernas,\n" +
                "responsivas e integração com APIs.",
            skills: [
                "React",
                "TypeScript",
                "JavaScript",
                "HTML",
                "CSS",
                "TailwindCSS",
            ]
        },
        {
            icon: <TbDatabase size={20}/>,
            title: "Banco de Dados",
            content: "Modelagem, persistência e consultas em bancos de dados relacionais e não relacionais, utilizando ORMs e acesso direto aos dados.",
            skills: [
                "SQL",
                "MySQL",
                "Entity Framework",
                "Sequelize",
            ]
        },
        {
            icon: <IoMdCloudOutline size={20}/>,
            title: "Infra & Redes",
            content: "Containerização, publicação de\n" +
                "aplicações e fundamentos de\n" +
                "infraestrutura e comunicação.",
            skills: [
                "Docker",
                "Linux",
                "Nginx",
                "Http",
                "Roteamento",
            ]
        },
        {
            icon: <BsCardChecklist size={20}/>,
            title: "Testes",
            content: "Testes automatizados para garantir\n" +
                "estabilidade, confiabilidade e facilitar a\n" +
                "manutenção.",
            skills: [
                "xUnit",
                "MOQ",
                "Bogus",
                "Jest",
                "Selenium",
            ]
        },
        {
            icon: <BsDiagram3 size={20}/>,
            title: "Arquitetura",
            content: "Organização de sistemas com baixo\n" +
                "acoplamento, código limpo e sustentável.",
            skills: [
                "Clean Arch",
                "DDD",
                "CQRS",
                "Microsserviços",
            ]
        },

    ]

    const skills = [
        {
            icon: <PiFileCSharp size={14}/>,
            skill: "C#"
        },
        {
            icon: <IoMdCodeWorking size={14}/>,
            skill: ".NET"
        },
        {
            icon: <IoMdCodeWorking size={14}/>,
            skill: "ASP.NET Core",
        },
        {
            icon: <MdOutlineLayers size={14}/>,
            skill: "Entity Framework Core",
        },
        {
            icon: <GrMysql size={14}/>,
            skill: "MySQL",
        },
        {
            icon: <FaDocker size={14}/>,
            skill: "Docker",
        },
        {
            icon: <FaGitAlt size={14}/>,
            skill: "Git",
        },
        {
            icon: <FaReact size={14}/>,
            skill: "React",
        },
        {
            icon: <BiLogoTypescript size={14}/>,
            skill: "TypeScript",
        },
        {
            icon: <IoLogoJavascript size={14}/>,
            skill: "JavaScript",
        },
        {
            icon: <FaFigma size={14}/>,
            skill: "Figma",
        },
        {
            icon: <SiNginx size={14}/>,
            skill: "Nginx",
        },
        {
            icon: <FaLinux size={14}/>,
            skill: "Linux",
        },
        {
            icon: <FaNodeJs size={14}/>,
            skill: "Node.js",
        },
        {
            icon: <SiSequelize size={14}/>,
            skill: "Sequelize",
        },
        {
            icon: <SiJest size={14}/>,
            skill: "Jest",
        },
        {
            icon: <FaHtml5 size={14}/>,
            skill: "HTML",
        },
        {
            icon: <FaCss3Alt size={14}/>,
            skill: "CSS",
        },
        {
            icon: <HiOutlineBadgeCheck size={14}/>,
            skill: "xUnit",
        },
        {
            icon: <SiMongodb size={14}/>,
            skill: "MongoDb",
        },
        {
            icon: <FaRegMap size={14}/>,
            skill: "FTTH",
        },
        {
            icon: <TbBrandOauth size={14}/>,
            skill: "OAuth",
        },
        {
            icon: <SiJsonwebtokens size={14}/>,
            skill: "JWT",
        },
        {
            icon: <LuRouter size={14}/>,
            skill: "TCP/IP",
        },
        {
            icon: <FaRegObjectUngroup size={14}/>,
            skill: "AutoMapper",
        },
        {
            icon: <SiHuawei size={14}/>,
            skill: "OLT Huawei",
        },
        {
            icon: <SiExpress size={14}/>,
            skill: "Express"
        },
        {
            icon: <SiSelenium size={14}/>,
            skill: "Selenium"
        },
        {
            icon: <RiTailwindCssFill size={14}/>,
            skill: "Tailwind CSS",
        }
    ]

    return (
        <SectionBackground id="skills" className={styles.skills}>
            <HeaderSection title="Tecnologias e Habilidades" subtitle="Principais stacks e habilidades técnicas"/>
            <div className={styles.mainSkills}>
                {skillsForCards.map((skill) => (
                    <CardSkill title={skill.title} content={skill.content} skills={skill.skills} icon={skill.icon}/>
                ))}
            </div>
            <div className={styles.miniSkills}>
                {skills.map((skill) => (
                    <Skill icon={skill.icon} text={skill.skill}/>
                ))}
            </div>
        </SectionBackground>
    )
}

export default Skills;