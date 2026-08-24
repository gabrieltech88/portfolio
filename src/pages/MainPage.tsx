import styles from "./MainPage.module.css";
import Hero from "@/sections/Hero/Hero.tsx";
import Skills from "@/sections/Skills/Skills.tsx";
import Projects from "@/sections/Projects/Projects.tsx";
import Experiences from "@/sections/Experiences/Experiences.tsx";
import Backgrounds from "@/sections/Backgrounds/Backgrounds.tsx";

function MainPage() {
    return(
        <main id={styles.main}>
            <Hero />
            <Skills />
            <Projects />
            <Experiences />
            <Backgrounds />
        </main>
    )
}

export default MainPage;