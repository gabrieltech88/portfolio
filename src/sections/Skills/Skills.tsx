import SectionBackground from "@/components/SectionBackground/SectionBackground.tsx";
import styles from "./Skills.module.css";
import HeaderSection from "@/components/HeaderSection/HeaderSection.tsx";
import { FaLaptopCode } from "react-icons/fa";
import { LuAppWindow } from "react-icons/lu";
import { TbDatabase } from "react-icons/tb";
import { IoMdCloudOutline } from "react-icons/io";
import { BsCardChecklist, BsDiagram3 } from "react-icons/bs";
import CardSkill from "@/components/CardSkill/CardSkill.tsx";




function Skills() {
    const skillsForCards = [
        {
            icon: <FaLaptopCode size={20} />,
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
            icon: <LuAppWindow size={20} />,
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
            icon: <TbDatabase size={20} />,
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
            icon: <IoMdCloudOutline size={20} />,
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
            icon: <BsCardChecklist size={20} />,
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
            icon: <BsDiagram3 size={20} />,
            title: "Arquitetura",
            content: "Organização de sistemas com baixo\n" +
                "acoplamento, código limpo e sustentável.",
            skills: [
                "Clean Arch",
                "DDD",
                "CQRS",
                "DDD",
                "Microsserviços",
            ]
        },
        
    ]
    
    
    return (
        <SectionBackground id="skills" className={styles.skills}>
            <HeaderSection title="Tecnologias e Habilidades" subtitle="Principais stacks e habilidades técnicas" />
            <div className={styles.mainSkills}>
                {skillsForCards.map((skill) => (
                    <CardSkill title={skill.title} content={skill.content} skills={skill.skills} icon={skill.icon} />
                ))}
            </div>
        </SectionBackground>
    )
}

export default Skills;