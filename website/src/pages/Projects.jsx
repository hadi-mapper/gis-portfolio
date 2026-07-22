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

          description="Topographic survey, volume calculation, mine progress monitoring, and operational support."

          tools={[
            "GNSS RTK",
            "Total Station",
            "Surpac"
          ]}

        />



        <ProjectCard

          title="Drone Mapping & Photogrammetry"

          description="UAV mapping workflow including orthomosaic, DSM, DTM, and stockpile monitoring."

          tools={[
            "DJI UAV",
            "Pix4D",
            "Photogrammetry"
          ]}

        />



        <ProjectCard

          title="Remote Sensing Analysis"

          description="Satellite imagery processing for land monitoring and environmental analysis."

          tools={[
            "Sentinel-2",
            "NDVI",
            "BSI"
          ]}

        />



        <ProjectCard

          title="WebGIS Development"

          description="Interactive mapping application and spatial data visualization."

          tools={[
            "React",
            "Leaflet",
            "GIS Database"
          ]}

        />


      </div>


    </section>

  )

}


export default Projects