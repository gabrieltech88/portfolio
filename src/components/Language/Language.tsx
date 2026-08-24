import styles from "./Language.module.css"

interface LanguageProps {
    isoCode: string,
    country: string,
    fluency: string,
}

function Language({isoCode, country, fluency}: LanguageProps) {
    return (
        <div className={styles.language}>
            <span className={styles.isoCode}>{isoCode}</span>
            <div>
                <span className={styles.country}>{country}</span>
                <span className={styles.fluency}>{fluency}</span>
            </div>
        </div>
    )
}

export default Language;