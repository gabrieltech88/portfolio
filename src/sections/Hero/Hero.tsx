import {FaArrowRight, FaGithub, FaLinkedin} from "react-icons/fa";
import {HiOutlineMail} from "react-icons/hi";
import SectionBackground from "@/components/SectionBackground/SectionBackground.tsx";
import styles from "./Hero.module.css";
import image from "@/assets/IMG_7302.png"

function Hero() {
    return (
        <SectionBackground id="hero" className={styles.hero}>
            <div className={styles.heroContent}>
                <div>
                    <span>Desenvolvedor de Software</span>
                    <h1 className={styles.heroTitle}>Gabriel Ramos</h1>
                   
                    <p className={styles.heroText}>Atuo principalmente com C# e .NET no back-end, desenvolvendo APIs e aplicações com foco em organização, arquitetura e qualidade de código. Também atuo no desenvolvimento front-end com React e TypeScript, além de utilizar ferramentas como Docker e bancos de dados relacionais. Busco construir soluções completas, participando desde a estruturação da aplicação até a experiência final do usuário. </p>

                </div>
                <div className={styles.containerHeroButtons}>
                    <a href="#projects">Ver projetos</a>
                    <a href="mailto:gabrieltech@gmail.com">Entrar em contato <FaArrowRight /></a>
                </div>
                <div className={styles.containerHeroSocial}>
                    <a href="https://github.com/gabrieltech88" target="_blank" rel="noreferrer">
                        <FaGithub size={20} className={styles.linkSocial}/>
                    </a>
                    <a href="https://www.linkedin.com/in/gabriel-ramos-a4524526a" target="_blank" rel="noreferrer">
                        <FaLinkedin size={20} className={styles.linkSocial}/>
                    </a>
                    <a href="mailto:gabrieltech@gmail.com">
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
                <img src={image} />
            </div>
        </SectionBackground>
    )
}

export default Hero;