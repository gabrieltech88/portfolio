import styles from "./Course.module.css";
interface CourseProps {
    name: string;
    institution: string;
}

function Course({ name, institution }: CourseProps) {
    return (
        <div className={styles.course}>
            <p>{name}</p>
            <span>{institution}</span>
        </div>
    )
}

export default Course;