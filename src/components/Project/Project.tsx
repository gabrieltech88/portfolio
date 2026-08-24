import styles from "./Project.module.css";
import { FaArrowRight } from "react-icons/fa";

interface ProjectProps {
    title: string,
    description: string,
    stack: string[],
    image: string,
    type: string,
    link?: string,
}

function Project(props: ProjectProps) {
    return (
        <div className={styles.project}>
            <div className={styles.content}>
                <span>{props.type}</span>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
                <div className={styles.containerStack}>
                    {props.stack.map((item) => (
                        <span className={styles.stack}>{item}</span>
                    ))}
                </div>
                <a>Detalhes do projeto <FaArrowRight size={16}/></a>
            </div>
            <div className={styles.containerImage}>
                <img src={props.image} alt="" className={styles.image}/>
            </div>
        </div>
    )
}

export default Project;