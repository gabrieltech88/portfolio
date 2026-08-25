import styles from "./Footer.module.css";

function Footer() {
    return (
        <footer id={styles.footer}>
            <p>Gabriel Ramos</p>
            <span className={styles.bar1}> | </span>
            <span className={styles.text1}>© 2026 Gabriel Ramos</span>
            <span className={styles.bar2}> | </span>
            <p className={styles.text2}>Feito com React + Typescript</p>
        </footer>
    )
}

export default Footer;