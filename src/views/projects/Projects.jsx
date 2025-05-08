import React from "react"
import { useEffect, useState } from "react"
import { fetchProjImage, getArtProjects } from "../../services/api"
import { MdOutlineHomeWork } from "react-icons/md"
import Project from "../../components/sharedComponents/project/Project"
import { Link } from "react-router-dom"

function Projects() {
  const [projects, setProjects] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  // useEffect(() => {
  //   getArtProjects()
  //     .then((response) => {
  //       setProjects(response)
  //       setIsLoading(false)
  //     })
  //     .catch((error) => {
  //       console.error("API Error:", error)
  //       setIsLoading(false)
  //     })
  // }, [])

  useEffect(() => {
    fetchProjImage()
      .then((response) => {
        setProjects(response)
        setIsLoading(false)
      })
      .catch((error) => {
        console.error("API Error:", error)
        setIsLoading(false)
      })
  }, [])

  useEffect(() => {
    console.log("projects data:", projects)
  }, [projects])

  return (
    <div>
      {isLoading ? (
        <div className="flex flex-wrap align-middle justify-center items-center h-screen">
          <MdOutlineHomeWork className="text-stone-800 text-4xl" />
        </div>
      ) : (
        <div>
          {projects.map((project) => (
            <div key={project.id}>
              <Link to={`/projects/${project.id}`}>
                <Project {...project} />
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Projects
