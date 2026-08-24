import styles from "./SectionBackground.module.css"

interface SectionBackgroundProps {
    children: React.ReactNode,
    id: string 
    className: string
}

function SectionBackground({ children, id, className }: SectionBackgroundProps) {
    return(
        <section id={`styles.${id}`} className={`${styles.sectionBackground} ${className}`}>
            {children}
        </section>
    )
}

export default SectionBackground;