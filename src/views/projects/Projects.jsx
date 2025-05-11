import React from "react"
import { useEffect, useState } from "react"
import { getArtProjects } from "../../services/api"
import { MdOutlineHomeWork } from "react-icons/md"
import Project from "../../components/sharedComponents/project/project"

function Projects() {
  const [projects, setProjects] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const pageSize = 20

  useEffect(() => {
    getArtProjects({ page, pageSize })
      .then(({ data, totalPages }) => {
        setProjects(data)
        setTotalPages(totalPages)
        setIsLoading(false)
      })
      .catch((error) => {
        console.error("API Error:", error)
        setIsLoading(false)
      })
  }, [page, pageSize])

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
        <div className="flex flex-col justify-center items-center gap-10 md:flex md:flex-wrap md:gap-15 md:mx-35">
          {projects.map((project) => (
            <div key={project.id}>
              <Project {...project} />
            </div>
          ))}
          <div>
            {page > 1 && (
              <button onClick={() => setPage(page - 1)}>Prev </button>
            )}
            <span>
              {page} of {totalPages}
            </span>
            {page < totalPages && (
              <button onClick={() => setPage(page + 1)}>Next</button>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default Projects
