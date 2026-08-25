import SectionBackground from "@/components/SectionBackground/SectionBackground.tsx";
import styles from "./Backgrounds.module.css";
import { RiGraduationCapLine } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import Degree from "@/components/Degree/Degree.tsx";
import Language from "@/components/Language/Language.tsx";
import Course from "@/components/Course/Course.tsx";
import { useRef } from "react";
import CoursesModal from "@/components/CoursesModal/CoursesModal.tsx";

function Backgrounds() {
    const degrees = [
        {
            course: "Engenharia de Software",
            institution: "Descomplica Faculdade Digital",
            description1: "2026 - 2028",
            inProgess: true,
            last: false,
        },

        {
            course: "Engenharia da Computação",
            institution: "ESAMC Santos",
            description1: "2025",
            description2: "1 ano cursado",
            inProgess: false,
            last: false,
        },

        {
            course: "Técnico em Mecatrônica",
            institution: "Fortec",
            description1: "2021",
            description2: "1 ano cursado",
            inProgess: false,
            last: false,

        },

        {
            course: "Ensino Médio",
            institution: "Escola Celestin Freinet",
            description1: "2023",
            description2: "Completo",
            inProgess: false,
            last: true
        },
    ]
    const languages = [
        {
            country: "Inglês",
            isoCode: "US",
            fluency: "INTERMEDIÁRIO"
        },
        {
            country: "Português",
            isoCode: "BR",
            fluency: "NATIVO"
        }
    ]
    const courses = [
        {
            name: "Tópicos avançados em .NET",
            institution: "Alura"
        },
        {
            name: "Arquitetura de Microsserviços e RabbitMQ com .NET",
            institution: "Alura"
        },
        {
            name: "Explore React com JavaScript e TypeScript",
            institution: "Alura"
        },
        {
            name: "Testes em .NET",
            institution: "Alura"
        }
    ]

  
    const dialogRef = useRef<HTMLDialogElement>(null);
    function openModal() {
        dialogRef.current?.showModal();
   
    }
    
    return (
        <SectionBackground id="background" className={styles.backgrounds}>
            <div className={styles.degreesAndLanguages}>
                <div className={styles.degrees}>
                    <div className={styles.header}>
                        <div className={styles.containerIcon}>
                            <RiGraduationCapLine className={styles.icon} size={20}/>
                        </div>
                        <h1>Formação</h1>
                    </div>
                    <div>
                        {degrees.map(degree => (
                            <Degree last={degree.last} course={degree.course} inProgress={degree.inProgess} institution={degree.institution} description1={degree.description1} description2={degree.description2} />
                        ))}
                    </div>
                </div>
                <div className={styles.languages}>
                    <div className={styles.header}>
                        <div className={styles.containerIcon}>
                            <TbWorld className={styles.icon} size={20}/>
                        </div>
                        <h1>Idiomas</h1>
                    </div>
                    <div className={styles.cardsLanguages}>
                        {languages.map(language => (
                            <Language isoCode={language.isoCode} country={language.country} fluency={language.fluency} />
                        ))}
                    </div>
                </div>
            </div>
            <div className={styles.courses}>
                <div className={styles.header} >
                    <h2>Formação complementar</h2>
                    <h3>Cursos e especializações que complementam minha formação técnica</h3>
                </div>
                <div className={styles.cardsCourses}>
                    {courses.map(course => (
                        <Course name={course.name} institution={course.institution} />
                    ))}
                </div>
                <button className={styles.linkToPageCourses} onClick={openModal}>Ver todos os cursos <FaArrowRight size={18} strokeWidth={0.5}/> </button>
            </div>

        
            <CoursesModal  dialogRef={dialogRef}/>
            
        </SectionBackground>
    )
}

export default Backgrounds;