function ProjectCard({ title, description, tools }) {
  return (
    <div className="project-card">

      <div className="project-image">
        GIS
      </div>


      <div className="project-content">

        <h3>
          {title}
        </h3>


        <p>
          {description}
        </p>


        <div className="tools">

          {tools.map((tool, index) => (
            <span key={index}>
              {tool}
            </span>
          ))}

        </div>

      </div>

    </div>
  )
}

export default ProjectCard