import styles from "./Skill.module.css";

interface SkillProps {
    icon: React.ReactNode,
    text: string
}

function Skill({ icon, text }: SkillProps) {
    return (
        <span className={styles.skill}>
            <span>
               {icon} 
            </span>
            {text}
        </span>
    )
}

export default Skill;