import {FaGithub, FaLinkedin} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import styles from "./Hero.module.css";
function Hero() {
    return(
        <section id={styles.hero}>
            <div className={styles.heroContent}>
                <span>DESENVOLVEDOR FULLSTACK</span>
                <h1 className={styles.heroTitle}>Gabriel Ramos</h1>
                <h2 className={styles.heroSubtitle}>Construo soluções robustas, escaláveis e eficientes</h2>
                <p className={styles.heroText}>Desenvolvedor de software com foco em </p>
                <div className={styles.containerHeroButtons}>
                    <a>Ver meus projetos</a>
                    <a>Baixar currículo</a>
                </div>
                <div className={styles.containerHeroSocial}>
                    <a>
                        <FaGithub />
                        
                    </a>
                    <a>
                        <FaLinkedin />
                    </a>
                    <a>
                        <HiOutlineMail />
                    </a>
                </div>
            </div>
            <div>
                <img />
            </div>
        </section>
    )
}

export default Hero;