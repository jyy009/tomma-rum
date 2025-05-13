import React from "react"
import { useEffect, useState } from "react"
import { getArtProjects } from "../../services/api"
import { MdOutlineHomeWork } from "react-icons/md"
import Project from "../../components/sharedComponents/project/project"
import { useSearchParams } from "react-router"

function Projects() {
  const [projects, setProjects] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchParams, setSearchParams] = useSearchParams()
  const initialPage = Number(searchParams.get("page")) || 1
  const [page, setPage] = useState(initialPage)
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
    setSearchParams({ page })
  }, [page, setSearchParams])
  
  return (
    <div>
      {isLoading ? (
        <div className="flex flex-wrap align-middle justify-center items-center h-screen">
          <MdOutlineHomeWork className="text-stone-800 text-4xl" />
        </div>
      ) : (
        <>
          <div className="flex flex-wrap justify-center items-center mt-5 mx-4 gap-10 md:gap-15 md:mx-35 2xl:gap-0 2xl:gap-x-7 2xl:gap-y-16 2xl:mx-16 2xl:mt-16 ">
            {projects.map((project) => (
              <div key={project.id}>
                <Project {...project} />
              </div>
            ))}
          </div>
          <div className="flex flex-row items-center justify-between w-full max-w-xs mx-auto my-10">
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
