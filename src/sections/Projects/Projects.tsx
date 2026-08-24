import SectionBackground from "@/components/SectionBackground/SectionBackground.tsx";
import HeaderSection from "@/components/HeaderSection/HeaderSection.tsx";
import styles from "./Projects.module.css";
import rapidFrotaImage from "@/assets/rapidFrota.png";
import Project from "@/components/Project/Project.tsx";

function Projects() {

    const projects = [
        {
            title: "Rapid Frota",
            description: "O sistema foi desenvolvido para auxiliar a gestão da frota da Rapid Fibra, centralizando o acompanhamento dos veículos e seus checklists. A aplicação permite registrar informações como quilometragem, observações, responsáveis e aprovações, além de contar com autenticação e controle de acesso por perfis, tornando o gerenciamento da frota mais organizado e confiável.",
            stack: ["C#", ".NET 8", "MySQL", "React"],
            image: rapidFrotaImage,
            type: "01 / ENTERPRISE ERP"
        },
        {
            title: "Rapid Frota",
            description: "O sistema foi desenvolvido para auxiliar a gestão da frota da Rapid Fibra, centralizando o acompanhamento dos veículos e seus checklists. A aplicação permite registrar informações como quilometragem, observações, responsáveis e aprovações, além de contar com autenticação e controle de acesso por perfis, tornando o gerenciamento da frota mais organizado e confiável.",
            stack: ["C#", ".NET 8", "MySQL", "React"],
            image: rapidFrotaImage,
            type: "02 / ENTERPRISE ERP"
        },
        {
            title: "Rapid Frota",
            description: "O sistema foi desenvolvido para auxiliar a gestão da frota da Rapid Fibra, centralizando o acompanhamento dos veículos e seus checklists. A aplicação permite registrar informações como quilometragem, observações, responsáveis e aprovações, além de contar com autenticação e controle de acesso por perfis, tornando o gerenciamento da frota mais organizado e confiável.",
            stack: ["C#", ".NET 8", "MySQL", "React"],
            image: rapidFrotaImage,
            type: "03 / ENTERPRISE ERP"
        },
    ]


    return (
        <SectionBackground id="projects" className={styles.projects}>
            <HeaderSection title="Projetos" subtitle="Projetos que transformam ideias em soluções reais"/>
            <div className={styles.containerProjects}>
                {projects.map((project) => (
                    <Project title={project.title} description={project.description} stack={project.stack} image={project.image} type={project.type} />
                ))}
            </div>
        </SectionBackground>
    )
}

export default Projects;