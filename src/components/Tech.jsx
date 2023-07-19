import styles from "../styles/Section.module.css"

export default function Tech() {
  return (
    <section className={styles.section}>
      <h2>Technologies</h2>
      <section className={styles.tech_img_wrapper}>
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
          rel="noreferrer"
          alt="JavaScript"
        />

        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          rel="noreferrer"
          alt="React"
        />

        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
          rel="noreferrer"
          alt="TypeScript"
        />

        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
          rel="noreferrer"
          alt="html"
        />

        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
          rel="noreferrer"
          alt="css"
        />

        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
          rel="noreferrer"
          alt="sass"
        />

        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
          rel="noreferrer"
          alt="bootstrap"
        />

        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
          rel="noreferrer"
          alt="nodejs"
        />

        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
          rel="noreferrer"
          alt="git"
        />

        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
          rel="noreferrer"
          alt="redux"
        />
      </section>
    </section>
  )
}
