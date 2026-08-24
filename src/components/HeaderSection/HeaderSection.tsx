import styles from "./HeaderSection.module.css";

interface HeaderSectionProps {
    title: string,
    subtitle: string,
}

function HeaderSection({ title, subtitle }: HeaderSectionProps) {
    return(
        <div id={styles.headerSection}>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
        </div>
    )
}

export default HeaderSection;