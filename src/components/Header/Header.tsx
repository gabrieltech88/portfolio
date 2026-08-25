import logo from "@/assets/gLogo.png";
import logoDark from "@/assets/gLogoDark.png";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMenuSharp, IoCloseSharp } from "react-icons/io5";

import styles from "./Header.module.css";

import { useContext, useState } from "react";
import { ThemeContext } from "@/context/ThemeContext.tsx";

import ThemeToggle from "@/components/ThemeToggle/ThemeToggle.tsx";

function Header() {
    const context = useContext(ThemeContext);
    const [menuOpen, setMenuOpen] = useState(false);

    if (!context) {
        throw new Error("Header deve estar dentro de ThemeProvider");
    }

    const { theme } = context;

    function toggleMenu() {
        setMenuOpen(prev => !prev);
    }

    function closeMenu() {
        setMenuOpen(false);
    }

    return (
        <header id={styles.header}>
            <a
                href="#hero"
                className={styles.brand}
                onClick={closeMenu}
            >
                <img
                    src={theme === "dark" ? logo : logoDark}
                    alt="Gabriel Ramos"
                />

                <div className={styles.brandText}>
                    <span>Gabriel Ramos</span>
                    <span>Software Developer</span>
                </div>
            </a>

            <nav
                className={`${styles.nav} ${
                    menuOpen ? styles.navOpen : ""
                }`}
            >
                <a href="#hero" onClick={closeMenu}>
                    Sobre
                </a>

                <a href="#skills" onClick={closeMenu}>
                    Skills
                </a>

                <a href="#projects" onClick={closeMenu}>
                    Projetos
                </a>

                <a href="#experiencia" onClick={closeMenu}>
                    Experiência
                </a>

                <a href="#background" onClick={closeMenu}>
                    Formação
                </a>

                <a href="#contact" onClick={closeMenu}>
                    Contato
                </a>
            </nav>

            <div className={styles.actions}>
                <div className={styles.socials}>
                    <a
                        href="https://github.com/gabrieltech88"
                        target="_blank"
                        rel="noreferrer"
                        className={styles.socialLinks}
                    >
                        <FaGithub
                            size={20}
                            className={styles.socialIcon}
                        />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/gabriel-ramos-a4524526a"
                        target="_blank"
                        rel="noreferrer"
                        className={styles.socialLinks}
                    >
                        <FaLinkedin
                            size={20}
                            className={styles.socialIcon}
                        />
                    </a>
                </div>

                <ThemeToggle />

                <button
                    type="button"
                    className={styles.menuButton}
                    onClick={toggleMenu}
                    aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
                    aria-expanded={menuOpen}
                >
                    {menuOpen ? (
                        <IoCloseSharp size={22} />
                    ) : (
                        <IoMenuSharp size={22} />
                    )}
                </button>
            </div>
        </header>
    );
}

export default Header;