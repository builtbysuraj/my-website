import ConnectionLink from "../components/ConnectionLink"
import styles from "../styles/Section.module.css"

export default function About() {
  return (
    <section className={`${styles.section} ${styles.ow}`}>
      <h2>About</h2>
      <p>
        Skilled Frontend developer with expertise in JavaScript and React. Built
        dynamic and engaging user interfaces for various projects.
      </p>
      <ConnectionLink />
    </section>
  )
}
