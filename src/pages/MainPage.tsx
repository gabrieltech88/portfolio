import styles from "./MainPage.module.css";
import Hero from "@/sections/Hero/Hero.tsx";
import Skills from "@/sections/Skills/Skills.tsx";

function MainPage() {
    return(
        <main id={styles.main}>
            <Hero />
            <Skills />
        </main>
    )
}

export default MainPage;