import SectionBackground from "@/components/SectionBackground/SectionBackground.tsx";
import styles from "./Experiences.module.css";
import HeaderSection from "@/components/HeaderSection/HeaderSection.tsx";
import {LuBadgeCheck} from "react-icons/lu";
import Experience from "@/components/Experience/Experience.tsx";

function Experiences() {
    const experiences = [
        {
            company: "Rapid Fibra",
            role: "Analista de Infraestrutura Pleno",
            description: "Responsável por projetar, planejar e implementar a infraestrutura da rede, assegurando eficiência e confiabilidade nos serviços. Realizar o monitoramento contínuo e acompanhar o desempenho da rede para identificar e solucionar problemas de forma proativa. Além de propor e implementar melhorias visando a otimização e expansão da infraestrutura.",
            skills: [
                "Projetos FTTH",
                "OLT Huawei",
                "TCP/IP",
                "Switches Huawei",
                "Roteamento",
                "IPv4/IPv6",
                "Wi-Fi",
                "Atendimento ao cliente"
            ],
            date: "DEZ/2023 - Atualmente"
        },
        {
            company: "Occaffé",
            role: "Barista",
            description: "Responsável pelo preparo e montagem de bebidas quentes e geladas, à base de café ou não, seguindo padrões de qualidade, apresentação e atendimento ao cliente.",
            skills: [
                "Atendimento ao cliente",
                "Barismo",
                "Bebidas a base de café",
                "Bebidas sem café"
            ],
            date: "JUN/2022 - NOV/2023"
        },
        {
            company: "Rapid Fibra",
            role: "Auxiliar de Estoque",
            description: "Responsável pela organização e separação de materiais em estoque, além da higienização, etiquetagem, preparação e configuração básica de ONUs e roteadores para utilização e distribuição.",
            skills: [
                "Wi-Fi",
                "Redes Óptica",
                "GPON",
                "Roteadores"
            ],
            date: "ABR/2020 - DEZ/2020"
        }
    ]

    return (
        <SectionBackground id="experiencia" className={styles.experiences}>
            <div className={styles.introductionExperiences}>
                <HeaderSection title="Experiência"
                               subtitle="Um pouco da minha trajetória e do que construí ao longo do caminho"/>
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
                            <div className={styles.progress}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.containerExperiences}>
                {experiences.map((experience) => (
                    <div  className={styles.timelineItem}>
                        <Experience company={experience.company} role={experience.role} description={experience.description}
                                    skills={experience.skills} date={experience.date}/>   
                    </div>
                ))}
            </div>
        </SectionBackground>
    )
}

export default Experiences;