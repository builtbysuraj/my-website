import project from "../styles/Project.module.css"
import section from "../styles/Section.module.css"

export default function SingleProject() {
  return (
    <li>
      <div
        className={`${section.container} ${section.container_center} ${project.padding_md}`}
      >
        <h1>
          <span className={project.class_marks}>Mark-1:</span>
          <span className={project.class_title}> Do you know me Quiz?</span>
        </h1>
        <small>September 2021</small>
        <p>
          A CLI app built with NodeJs. It consists of 15 questions related to medivided into 3 levels.A CLI app built with NodeJs. It consists of 15 questions related to me
          divided into 3 levels.
        </p>
        <div className={project.project_btn}>
          <a className={project.live} href="#">
            Live Project
          </a>
          <a className={project.source} href="#">
            View Source
          </a>
        </div>
      </div>
    </li>
  )
}
