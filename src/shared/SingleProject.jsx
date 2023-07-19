import project from "../styles/Project.module.css"
import section from "../styles/Section.module.css"

export default function SingleProject({ data }) {
  const { id, title, date, desc, live, source } = data
  return (
    <li>
      <div
        className={`${section.container} ${section.container_center} ${project.padding_md}`}
      >
        <h1>
          <span className={project.class_marks}>Mark-{id}:</span>
          <span className={project.class_title}> {title}</span>
        </h1>
        <small>{date}</small>
        <p>{desc}</p>
        <div className={project.project_btn}>
          <a className={project.live} href={live}>
            Live Project
          </a>
          <a className={project.source} href={source}>
            View Source
          </a>
        </div>
      </div>
    </li>
  )
}
