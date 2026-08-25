import logo from "@/assets/gLogo.png";
import logoDark from "@/assets/gLogoDark.png";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import styles from "./Header.module.css";
import {useContext} from "react";
import {ThemeContext} from "@/context/ThemeContext.tsx";
import ThemeToggle from "@/components/ThemeToggle/ThemeToggle.tsx";

function Header() {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error("ThemeToggle deve estar dentro de ThemeProvider");
    }

    const { theme } = context;
    
    return (
        <header id={styles.header}>
            <div>
                <img src={theme  === "dark" ? logo : logoDark } />
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
                    <a href="https://github.com/gabrieltech88" target="_blank" rel="noreferrer" className={styles.socialLinks}>
                        <FaGithub size={20} className={styles.socialIcon}/>
                    </a>
                    <a href="https://www.linkedin.com/in/gabriel-ramos-a4524526a" target="_blank" rel="noreferrer" className={styles.socialLinks}>
                        <FaLinkedin size={20} className={styles.socialIcon}/>
                    </a>
                </div>
                <ThemeToggle />
            </div>
        </header>
    )
}

export default Header;