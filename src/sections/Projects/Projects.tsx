import SectionBackground from "@/components/SectionBackground/SectionBackground.tsx";
import HeaderSection from "@/components/HeaderSection/HeaderSection.tsx";

function Projects() {
    return (
        <SectionBackground id="projects" className={styles.projects} >
            <HeaderSection title="Projetos" subtitle="Projetos que transformam ideias em soluções reais" />
        </SectionBackground>
    )
}

export default Projects;