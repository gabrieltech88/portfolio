import SectionBackground from "@/components/SectionBackground/SectionBackground.tsx";
import styles from "./Experiences.module.css";
import HeaderSection from "@/components/HeaderSection/HeaderSection.tsx";
import { LuBadgeCheck } from "react-icons/lu";

function Experiences() {
    return (
        <SectionBackground id="experiencia" className={styles.experiences}>
            <div className={styles.introductionExperiences}>
                <HeaderSection title="Experiência" subtitle="Um pouco da minha trajetória e do que construí ao longo do caminho" />
                <div className={styles.cardIntroduction}>
                    <span className={styles.badge}><LuBadgeCheck/> 3+ ANOS DE EXPERIÊNCIA</span>
                    <p>Evoluindo arquiteturas e
                        resolvendo desafios
                        complexos.</p>
                    <div className={styles.departments}>
                        <span className={styles.area}>Software</span>
                        <span className={styles.area}>Telecom</span>
                        <span className={styles.area}>Infra</span>
                    </div>
                    <div className={styles.senorityProgress}>
                        <div className={styles.senorityProgressText}>
                            <span>SENORITY PROGRESS</span>
                            <span>20%</span>
                        </div>
                        <div className={styles.progressBar}>
                            <div className={styles.progress} />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.containerExperiences}>
                
            </div>
        </SectionBackground>
    )
}

export default Experiences;