import Timeline from "../components/Timeline"

function About() {
  return (
    <section className="about">

      <h2>
        About Me
      </h2>

      <p>
        I am a GIS Professional with a background in
        mine survey, engineering survey, drone mapping,
        and spatial data analysis.
      </p>

      <p>
        My journey combines field measurement,
        geospatial technology, and mining operations
        to transform real-world data into spatial intelligence.
      </p>


      <div className="skills">

        <div>
          <h3>Survey</h3>
          <p>
            Total Station, GNSS RTK,
            Mine Coordinate System
          </p>
        </div>


        <div>
          <h3>GIS</h3>
          <p>
            ArcGIS, Spatial Analysis,
            Remote Sensing
          </p>
        </div>


        <div>
          <h3>Drone Mapping</h3>
          <p>
            UAV Mapping, Photogrammetry,
            Orthomosaic
          </p>
        </div>

      </div>


      <h2>
        Career Journey
      </h2>

      <Timeline />


    </section>
  )
}

export default About