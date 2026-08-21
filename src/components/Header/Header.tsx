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
                <a href="">Sobre</a>
                <a href="">Skills</a>
                <a href="">Projetos</a>
                <a href="">Experiência</a>
                <a href="">Formação</a>
                <a href="">Contato</a>
            </nav>
            <div>
                <div>
                    <a target="_blank" rel="noreferrer" className={styles.socialLinks}>
                        <FaGithub size={20} color="#b5b4ba"/>
                    </a>
                    <a target="_blank" rel="noreferrer" className={styles.socialLinks}>
                        <FaLinkedin size={20} color="#b5b4ba"/>
                    </a>
                </div>
                <a className={styles.button}>Baixar Currículo <RiDownload2Line size={16} strokeWidth={0.875}/></a>
            </div>
        </header>
    )
}

export default Header;