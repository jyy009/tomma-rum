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
        <>
          <div className="flex flex-wrap justify-center items-center mt-5 md:flex md:flex-wrap md:gap-15 md:mx-35">
            {projects.map((project) => (
              <div key={project.id}>
                <Project {...project} />
              </div>
            ))}
          </div>
          <div className="flex flex-row items-center justify-between w-full max-w-xs mx-auto">
            {page > 1 ? (
              <button onClick={() => setPage(page - 1)} className="w-[60px]">
                Prev
              </button>
            ) : (
              <span className="w-[60px]"></span>
            )}
            <span className="text-center flex-1">
              {page} of {totalPages}
            </span>
            {page < totalPages ? (
              <button onClick={() => setPage(page + 1)} className="w-[60px]">
                Next
              </button>
            ) : (
              <span className="w-[60px]"></span>
            )}
          </div>
        </>
      )}
    </div>
  )
}

export default Projects
