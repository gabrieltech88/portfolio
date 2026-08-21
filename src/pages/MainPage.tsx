import styles from "./MainPage.module.css";
import Hero from "@/sections/Hero/Hero.tsx";

function MainPage() {
    return(
        <main id={styles.main}>
            <Hero />
        </main>
    )
}

export default MainPage;