import SingleProject from "../shared/SingleProject"
import header from "../styles/Header.module.css"

export default function Projects() {
  return (
    <div className={`${header.container} ${header.container_center}`}>
      <ul>
        <SingleProject />
      </ul>
    </div>
  )
}
