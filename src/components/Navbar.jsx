import { Link } from "react-router-dom"
import styles from "../styles/Navbar.module.css"

export default function Navbar() {
  return (
    <nav className={styles.navigation}>
      <div className={styles.nav_brand}>
        <Link to={"/"}>Suraj Gupta</Link>
      </div>
      <ul className={styles.list_non_bullet}>
        <li className={styles.list_item_inline}>
          <Link className="link link-active" to="/">
            Home
          </Link>
        </li>
        <li className={styles.list_item_inline}>
          <Link className="link" to="/projects">
            Projects
          </Link>
        </li>
      </ul>
    </nav>
  )
}
