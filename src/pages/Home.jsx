import About from "../components/About"
import Header from "../components/Header"
import Project from "../components/Project"
import Tech from "../components/Tech"
import stylesHome from "../styles/Home.module.css"
import styles from "../styles/Section.module.css"

export default function Home() {
  return (
    <div className={`${styles.container} ${styles.container_center}`}>
      <Header />
      <About />
      <Tech />
      <Project />
      <footer>
        <p> Made with ❤️ by Suraj Gupta</p>
      </footer>
    </div>
  )
}
