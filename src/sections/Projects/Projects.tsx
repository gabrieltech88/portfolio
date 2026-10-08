import SectionBackground from "@/components/SectionBackground/SectionBackground.tsx";
import HeaderSection from "@/components/HeaderSection/HeaderSection.tsx";
import styles from "./Projects.module.css";
import rapidFrotaImage from "@/assets/rapidFrota.png";
import rapidWikiImage from "@/assets/rapidWiki.png";
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
            title: "Rapid Wiki",
            description: "O sistema foi desenvolvido para centralizar e padronizar o conhecimento interno da Rapid Fibra, facilitando o acesso a procedimentos, documentações e arquivos utilizados pelas equipes. A aplicação permite criar, editar, organizar e consultar conteúdos por departamento, além de contar com autenticação e controle de acesso por perfis de usuário. Dessa forma, a RapidWiki contribui para a organização das informações, a padronização dos processos internos e o compartilhamento eficiente do conhecimento entre os setores da empresa.",
            stack: ["C#", ".NET 10", "React", "Typescript", "TipTap", "MySQL"],
            image: rapidWikiImage,
            type: "02 / KNOWLEDGE MANAGEMENT SYSTEM"
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