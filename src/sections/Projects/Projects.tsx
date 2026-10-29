import SectionBackground from "@/components/SectionBackground/SectionBackground.tsx";
import HeaderSection from "@/components/HeaderSection/HeaderSection.tsx";
import styles from "./Projects.module.css";
import rapidFrotaImage from "@/assets/rapidFrota.png";
import rapidWikiImage from "@/assets/rapidWiki.png";
import rLabImage from "@/assets/rLab.png"
import Project from "@/components/Project/Project.tsx";

function Projects() {

    const projects = [
        {
            title: "Rapid Wiki",
            description: "O sistema foi desenvolvido para centralizar e padronizar o conhecimento interno da Rapid Fibra, facilitando o acesso a procedimentos, documentações e arquivos utilizados pelas equipes. A aplicação permite criar, editar, organizar e consultar conteúdos por departamento, além de contar com autenticação e controle de acesso por perfis de usuário. Dessa forma, a RapidWiki contribui para a organização das informações, a padronização dos processos internos e o compartilhamento eficiente do conhecimento entre os setores da empresa.",
            stack: ["C#", ".NET 10", "React", "Typescript", "TipTap", "MySQL"],
            image: rapidWikiImage,
            type: "01 / KNOWLEDGE MANAGEMENT SYSTEM"
        },
        {
            title: "RLab",
            description: "O RLab é uma plataforma desenvolvida para automatizar a configuração e os testes de ONUs em ambientes de provedores de internet. A solução integra uma interface em React com um backend em .NET, utilizando SignalR para acompanhar a execução das operações e visualizar logs em tempo real. As rotinas de automação utilizam Playwright, enquanto a integração com equipamentos MikroTik, por meio de VRF e NAT, permite acessar simultaneamente ONUs que compartilham o mesmo endereço IP de gerenciamento. Dessa forma, o RLab busca reduzir tarefas manuais, agilizar a validação de equipamentos e tornar os processos de configuração e teste mais eficientes.",
            stack: ["C#", ".NET 10", "SignalR", "Playwright", "React", "TypeScript","MikroTik"],
            image: rLabImage,
            type: "02 / NETWORK AUTOMATION LAB"
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
            <HeaderSection title="Projetos" subtitle="Projetos que transformam ideias em soluções reais" />
            <div className={styles.containerProjects}>
                {projects.map((project) => (
                    <Project title={project.title} description={project.description} stack={project.stack} image={project.image} type={project.type} />
                ))}
            </div>
        </SectionBackground>
    )
}

export default Projects;