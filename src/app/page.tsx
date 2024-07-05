import Image from "next/image";
import styles from "./page.module.css";
import { Card } from "src/components/card";
export default function Home() {
  return (
    <div className={`${styles.container_2} fade_in`}>
      <Card>
        <Card.TitleXL>
          Soy un
          <br />
          <span className={styles.mark}>Desarrollador</span>
          <br />
          Front-End
        </Card.TitleXL>

        <Card.Description>
          Soy un desarrollador front-end con más de tres años de experiencia en
          desarrollo web y móvil. He liderado equipos de front-end, supervisado
          revisiones de código y asegurado la implementación de nuevas
          funcionalidades. Además, tengo experiencia en el mantenimiento
          continuo de aplicaciones, garantizando su rendimiento y estabilidad.
          He trabajado en proyectos de diversas industrias, adaptándome
          rápidamente a las necesidades del equipo y asegurando altos estándares
          de calidad. Me apasiona contribuir al éxito de proyectos innovadores y
          siempre estoy dispuesto a aprender y crecer.
        </Card.Description>
      </Card>
      <div className={styles.circle}>
        <Image
          className={`${styles.profile_img} shadow-container`}
          src="/profile.png"
          alt="profile"
          width={1000}
          height={1000}
        />
      </div>
    </div>
  );
}
