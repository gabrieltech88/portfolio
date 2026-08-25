import styles from "./Experience.module.css";

interface ExperienceProps {
    role: string,
    company: string,
    description: string,
    skills: string[],
    date: string 
}

function Experience (props: ExperienceProps) {
    return (
        <div className={styles.experience}>
            <div>
                <h2 className={styles.role}>{props.role}</h2>
                <span className={styles.date}>{props.date}</span>
            </div>
            <span className={styles.company}>{props.company}</span>
            <p className={styles.description}>{props.description}</p>
            <div className={styles.skillsContainer}>
                {props.skills.map(skill => (
                    <span className={styles.skill}>{skill}</span>
                ))}
            </div>
        </div>
    )
}

export default Experience;