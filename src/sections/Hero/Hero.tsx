import {FaGithub, FaLinkedin} from "react-icons/fa";
import {HiOutlineMail} from "react-icons/hi";
import SectionBackground from "@/components/SectionBackground/SectionBackground.tsx";
import styles from "./Hero.module.css";

function Hero() {
    return (
        <SectionBackground id="hero" className={styles.hero}>
            <div className={styles.heroContent}>
                <div>
                    <span>DESENVOLVEDOR FULLSTACK</span>
                    <h1 className={styles.heroTitle}>Gabriel Ramos</h1>
                    <h2 className={styles.heroSubtitle}>Construo soluções robustas, escaláveis e eficientes</h2>
                    <p className={styles.heroText}>Desenvolvedor Fullstack criando aplicações modernas do backend à interface. Transformo ideias em produtos funcionais, bem estruturados e pensados para oferecer uma boa experiência do início ao fim. </p>

                </div>
                <div className={styles.containerHeroButtons}>
                    <a>Ver meus projetos</a>
                    <a>Baixar currículo</a>
                </div>
                <div className={styles.containerHeroSocial}>
                    <a>
                        <FaGithub size={20} className={styles.linkSocial}/>
                    </a>
                    <a>
                        <FaLinkedin size={20} className={styles.linkSocial}/>
                    </a>
                    <a>
                        <HiOutlineMail size={20} className={styles.linkSocial}/>
                    </a>
                </div>
            </div>
            <div className={styles.heroImage}>
                <div className={styles.searchBar}>
                    <div className={styles.circles}>
                        <div className={styles.circle}></div>
                        <div className={styles.circle}></div>
                        <div className={styles.circle}></div>
                    </div>
                    
                    <span>gabrielramos.com</span>
                </div>
                <img src="" />
            </div>
        </SectionBackground>
    )
}

export default Hero;