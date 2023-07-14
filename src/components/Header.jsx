import styles from "../styles/Header.module.css"
import img from "/hero.svg"

export default function Header() {
  return (
    <header className={styles.hero}>
      <img src={img} alt="hero.svg" />
      <h1 className={styles.hero_heading}>
        Suraj Gupta the{" "}
        <span className={styles.inline_heading}>web developer</span>
      </h1>
    </header>
  )
}
