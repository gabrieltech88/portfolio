import logo from "@/assets/gLogo.png";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { RiDownload2Line } from "react-icons/ri";
import styles from "./Header.module.css";

function Header() {
    return (
        <header id={styles.header}>
            <div>
                <img src={logo} />
                <div>
                    <span>Gabriel Ramos</span>
                    <span>Software Developer</span>
                </div>
            </div>
            <nav>
                <a href="#hero">Sobre</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projetos</a>
                <a href="#experiencia">Experiência</a>
                <a href="#background">Formação</a>
                <a href="#contact">Contato</a>
            </nav>
            <div>
                <div>
                    <a target="_blank" rel="noreferrer" className={styles.socialLinks}>
                        <FaGithub size={20} className={styles.socialIcon}/>
                    </a>
                    <a target="_blank" rel="noreferrer" className={styles.socialLinks}>
                        <FaLinkedin size={20} className={styles.socialIcon}/>
                    </a>
                </div>
                <a className={styles.button}>Baixar Currículo <RiDownload2Line size={16} strokeWidth={0.875}/></a>
            </div>
        </header>
    )
}

export default Header;