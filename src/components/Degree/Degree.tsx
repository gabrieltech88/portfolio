import styles from "./Degree.module.css";

interface DegreeProps {
    course: string,
    inProgress: boolean,
    institution: string,
    description1: string,
    description2?: string,
    last: boolean
}

function Degree(props: DegreeProps) {
    return (
        <div className={props.last ? styles.degreeLast : styles.degree}>
            <div className={styles.header}>
                <span>{props.course}</span>
                {props.inProgress ? <span>Em andamento</span> : null}
            </div>
            <p className={styles.institution}>{props.institution}</p>
            {props.inProgress ? <span className={styles.description} >{props.description1}</span> : 
                <span className={styles.description}>
                    {props.description1} 
                    <div className={styles.circle}/>
                    {props.description2}
                </span>
            }

        </div>
    )
}

export default Degree;