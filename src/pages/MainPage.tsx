import styles from "./MainPage.module.css";
import Hero from "@/sections/Hero/Hero.tsx";
import Skills from "@/sections/Skills/Skills.tsx";
import Projects from "@/sections/Projects/Projects.tsx";
import Experiences from "@/sections/Experiences/Experiences.tsx";
import Backgrounds from "@/sections/Backgrounds/Backgrounds.tsx";
import Contact from "@/sections/Contact/Contact.tsx";

function MainPage() {
    return(
        <main id={styles.main}>
            <Hero />
            <Skills />
            <Projects />
            <Experiences />
            <Backgrounds />
            <Contact />
        </main>
    )
}

export default MainPage;