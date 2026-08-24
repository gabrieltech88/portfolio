import SectionBackground from "@/components/SectionBackground/SectionBackground.tsx";
import styles from "./Skills.module.css";
import HeaderSection from "@/components/HeaderSection/HeaderSection.tsx";
import { FaLaptopCode } from "react-icons/fa";
import { LuAppWindow } from "react-icons/lu";
import { TbDatabase } from "react-icons/tb";
import { IoMdCloudOutline } from "react-icons/io";




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
            content: "Construção de interfaces modernas, responsivas e integração com APIs.",
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
        
        
    ]
    
    
    return (
        <SectionBackground id="skills" className={styles.skills}>
            <HeaderSection title="Tecnologias e Habilidades" subtitle="Principais stacks e habilidades técnicas" />
            <div>
                
            </div>
        </SectionBackground>
    )
}

export default Skills;