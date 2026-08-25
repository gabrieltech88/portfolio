import {type RefObject, useContext} from "react";
import styles from "./CoursesModal.module.css";
import { GrCertificate } from "react-icons/gr";
import { IoIosCloseCircleOutline } from "react-icons/io";
import descomplica from "@/assets/descomplica-trimmed.png";
import descomplicaDark from "@/assets/descomplica-trimmed-dark.png";
import fiberschool from "@/assets/fiberschool-trimmed.png";
import microsoft from "@/assets/microsoft-trimmed.png";
import microsoftDark from "@/assets/microsoft-trimmed-dark.png";
import alura from "@/assets/alura-trimmed.png";
import aluraDark from "@/assets/alura-trimmed-dark.png";

import {ThemeContext} from "@/context/ThemeContext.tsx";



interface CoursesModalProps {
    dialogRef: RefObject<HTMLDialogElement | null>
}

function CoursesModal({dialogRef}: CoursesModalProps) {
    const aluraCourses = [
        "Tópicos avançados em .NET",
        "Microsserviços e RabbitMQ com .NET",
        "ASP.NET Core: aplicações com C#, .NET, Entity Framework e LINQ",
        "Boas práticas em C#",
        "C# com Orientação a Objetos",
        "C# Coleções, Arquivos e Bibliotecas",
        "React com JavaScript + TypeScript",
        "Começando em DevOps",
        "Consultas com MySQL",
        "Git e GitHub: compartilhando e colaborando em projetos",
        "APIs com Node.js e Express",
        "Autenticação, testes e segurança em Node.js",
        "JavaScript com foco no back-end",
        "Redes de computadores",
        "Linux",
        "Ferramentas essenciais para Devs",
        "Aplicações web com HTML, CSS e JavaScript",
        "CSS: aprofunde estilos",
        "HTML e CSS para projetos web 2",
        "HTML e CSS para projetos web 1",
        "Figma",
        "Meta ADS"
    ];
    const fiberschoolCourses = [
        "TCP/IP: Intermediário",
        "TCP/IP: Básico",
    ]
    const descomplicaCourses = [
        "User Experience",
        "Programming Basics"
    ]

    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error("ThemeToggle deve estar dentro de ThemeProvider");
    }

    const { theme } = context;
    
    function closeModal() {
        dialogRef.current?.close();
    }

    return (
        <dialog ref={dialogRef} id={styles.coursesModal}>
            <div className={styles.header}>
                <div>
                    <GrCertificate className={styles.icon} size={20}/>
                    <span>Cursos & Certificações</span>
                </div>
                <IoIosCloseCircleOutline onClick={closeModal} className={styles.closeModal} size={24}/>
            </div>
            <div className={styles.content}>
                <div className={`${styles.plataform} ${styles.alura}`}>
                    <div className={styles.containerImage}>
                        <img src={theme  === "dark" ? aluraDark : alura } />
                    </div>
                    <div className={styles.courses}>
                        {aluraCourses.map((course) => (
                            <div className={styles.course}>
                                <div className={styles.circle}/>
                                <span>{course}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={`${styles.plataform} ${styles.microsoft}`}>
                    <div className={styles.containerImage}>
                        <img src={theme  === "dark" ? microsoftDark : microsoft } />
                    </div>
                </div>

                <div className={`${styles.plataform} ${styles.descomplica}`}>
                    <div className={styles.containerImage}>
                        <img src={theme  === "dark" ? descomplicaDark : descomplica } />
                    </div>

                    <div className={styles.courses}>
                        {descomplicaCourses.map((course) => (
                            <div className={styles.course}>
                                <div className={styles.circle}/>
                                <span>{course}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={`${styles.plataform} ${styles.fiberschool}`}>
                    <div className={styles.containerImage}>
                        <img src={fiberschool}/>
                    </div>
                    <div className={styles.courses}>
                        {fiberschoolCourses.map((course) => (
                            <div className={styles.course}>
                                <div className={styles.circle}/>
                                <span>{course}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </dialog>
    )
}

export default CoursesModal;