import { Link } from "react-router-dom"
import styles from "../styles/Section.module.css"

export default function Project() {
  return (
    <section className={`${styles.section} ${styles.ow}`}>
      <h2>Projects</h2>
      <p className={styles.project_para}>
        I like to showcase my work and thus, you can see my projects hosted
        online.
      </p>
      <Link
        className={`${styles.link_secondary}${styles.link_primary} ${styles.link} ${styles.section_link}`}
        to="/projects"
      >
        see projects
      </Link>
    </section>
  )
}
