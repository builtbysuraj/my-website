import styles from "../styles/Section.module.css"

export default function ConnectionLink() {
  return (
    <>
      <p className={styles.connection}>Connect with me!</p>
      <ul
        className={`${styles.social_links} ${styles.non_bullet} ${styles.flex}`}
      >
        <li className={styles.list_item_inline}>
          <a
            className={styles.link_secondary}
            href="https://drive.google.com/file/d/1PIPfbfqFqTsdV1EJmxwISqeQa32hnNK2/view?usp=drive_link"
            target="_blank"
          >
            Resume
          </a>
        </li>
        <li className={styles.list_item_inline}>
          <a
            className={styles.link_secondary}
            href="mailto:surajgupta3940@gmail.com"
          >
            Mail
          </a>
        </li>
        <li className={styles.list_item_inline}>
          <a
            className={styles.link_secondary}
            href="https://www.github.com/builtbysuraj"
            target="_blank"
          >
            GitHub
          </a>
        </li>
        <li className={styles.list_item_inline}>
          <a
            className={styles.link_secondary}
            href="https://www.linkedin.com/builtbysuraj"
            target="_blank"
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </>
  )
}
