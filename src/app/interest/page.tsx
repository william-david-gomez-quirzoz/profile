"use client";
import { Description, Typography } from "src/components";
import { TabContext } from "src/components/rounded-tabs";
import styles from "./styles.module.css";
import { FaSwimmer } from "react-icons/fa";
import { RiBoxingFill } from "react-icons/ri";
import { MdOutlineDirectionsBike } from "react-icons/md";
import { FaReact } from "react-icons/fa";
import { SiKotlin } from "react-icons/si";
import { IoLogoVue } from "react-icons/io5";

export default function Interests() {
  return (
    <div className={styles.container}>
      <TabContext value={"1"}>
        <>
          <TabContext.TabList>
            <TabContext.Tab value={"1"}>Desarrolo</TabContext.Tab>
            <TabContext.Tab value={"2"}>Deportes</TabContext.Tab>
          </TabContext.TabList>
          <TabContext.TabPanel className={`${styles.tab_panel} fade_in`} value={"2"}>
            <div className={styles.interest}>
              <Description
                position="right"
                alt="user profile"
                icon={<FaSwimmer className={styles.icon} />}
                description="Me encanta la natación. Disfruto cada brazada en el agua y la sensación de libertad que ofrece. La natación no solo es mi deporte favorito, sino también mi forma de relajarme y mantenerme en forma."
              />
              <Description
                alt="user profile"
                icon={<RiBoxingFill className={styles.icon} />}
                description="Me apasionan las artes marciales. Disfruto cada entrenamiento y el desarrollo de la disciplina, la fuerza y la concentración. Practicar artes marciales no solo es mi forma de mantenerme en forma, sino también de crecer mental y espiritualmente"
              />
              <Description
                position="right"
                alt="user profile"
                icon={<MdOutlineDirectionsBike className={styles.icon} />}
                description="Me apasiona el ciclismo. Disfruto cada pedaleo y la sensación de libertad al recorrer distintos paisajes. El ciclismo no solo me mantiene en forma, sino que también me permite conectar con la naturaleza y explorar nuevos lugares."
              />
            </div>
          </TabContext.TabPanel>
          <TabContext.TabPanel className={`${styles.tab_panel} fade_in`} value={"1"}>
            <div className={styles.interest}>
              <Description
                position="right"
                alt="user profile"
                icon={<FaReact className={styles.icon} />}
                description="Me encanta trabajar con React. Disfruto la forma en que puedo crear componentes reutilizables y manejar el estado de manera eficiente. La rapidez y dinamismo que ofrece React hacen que desarrollar aplicaciones web sea una experiencia gratificante y emocionante."
              />
              <Description
                alt="user profile"
                icon={<SiKotlin className={styles.icon} />}
                description="Me apasiona programar en Kotlin. Me atrae su sintaxis moderna y concisa, que hace que escribir código sea más limpio y divertido. Kotlin es un placer para trabajar, ya sea en el desarrollo de aplicaciones móviles o en la JVM, siempre me ofrece una experiencia de desarrollo fluida y eficiente."
              />
              <Description
                position="right"
                alt="user profile"
                icon={<IoLogoVue className={styles.icon} />}
                description="Soy un gran fan de Vue.js. Me gusta su simplicidad y flexibilidad, lo que me permite adaptarlo fácilmente a cualquier proyecto. Con Vue.js, puedo crear interfaces de usuario modernas y reactivas sin complicaciones, disfrutando cada paso del proceso de desarrollo."
              />
            </div>
          </TabContext.TabPanel>
        </>
      </TabContext>
    </div>
  );
}
