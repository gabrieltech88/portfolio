import { LuSendHorizontal } from "react-icons/lu";
import styles from "./Contact.module.css";

function Contact() {
    return (
        <section id="contact" className={styles.contact}>
            <h1>Vamos construir algo incrível juntos?</h1>
            <p>Estou sempre aberto a discutir novas oportunidades, arquiteturas
                desafiadoras ou projetos interessantes</p>
            <a href="mailto:gabrieltech@gmail.com">Entrar em contato <LuSendHorizontal /> </a>
        </section>
    )
}

export default Contact;