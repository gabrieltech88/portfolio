import styles from "./CardSkill.module.css";

interface CardSkillProps {
    title: string,
    content: string,
    skills: string[],
    icon: React.ReactNode,
}

function CardSkill(props: CardSkillProps) {
    return (
        <div id={styles.cardSkill}>
            <div className={styles.containerIcon}>
                {props.icon}
            </div>
            <span className={styles.titleCardSkill}>{props.title}</span>
            <p className={styles.contentCardSkill}>{props.content}</p>
            <div className={styles.skillsCard}>
                {props.skills.map((skill: string) => ( 
                     <span key={skill} className={styles.skill}>{skill}</span>
                ))}
            </div>
        </div>
    )
}

export default CardSkill;