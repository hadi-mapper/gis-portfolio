import ProjectCard from "../components/ProjectCard"

function Projects() {
  return (
    <section className="projects">

      <h2>
        Projects
      </h2>

      <p>
        Selected works in mine survey,
        GIS, drone mapping, and remote sensing.
      </p>


      <div className="project-grid">

        <ProjectCard
          title="Mine Survey & Production Monitoring"
          description="
          Topographic survey, volume calculation,
          progress monitoring, and mining operation support.
          "
        />


        <ProjectCard
          title="Drone Mapping & Photogrammetry"
          description="
          UAV mapping, orthomosaic generation,
          DSM/DTM processing, and stockpile monitoring.
          "
        />


        <ProjectCard
          title="Remote Sensing Analysis"
          description="
          Sentinel-2 imagery processing,
          NDVI, BSI, and land cover analysis.
          "
        />


        <ProjectCard
          title="WebGIS Development"
          description="
          Interactive spatial visualization,
          web mapping, and GIS database.
          "
        />

      </div>


    </section>
  )
}

export default Projects