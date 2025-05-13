import React from "react"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import {
  getArtProjects,
  getCategories,
  getArtProjectsByYear,
} from "../../services/api"
import logoLoader from "../../../src/assets/tommarum-logo_TR-BLACK.png"
import Project from "../../components/sharedComponents/project/project"

const EXCLUDED_CATEGORIES = ["osynlig", "uncategorized", "utbyta", "nordingrå"]

const filterAndSortCategories = (categories) => {
  return categories
    .filter(
      (cat) => !EXCLUDED_CATEGORIES.includes(cat.name.trim().toLowerCase())
    )
    .sort((a, b) => {
      const yearA = Number(a.description)
      const yearB = Number(b.description)
      if (!isNaN(yearA) && !isNaN(yearB)) return yearB - yearA
      if (!isNaN(yearA)) return -1
      if (!isNaN(yearB)) return 1
      return a.name.localeCompare(b.name)
    })
}

function Projects() {
  const navigate = useNavigate()
  const [projects, setProjects] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const pageSize = 20
  const [categories, setCategories] = useState([])
  const [categoriesLoading, setCategoriesLoading] = useState(true)
  const [selectedYear, setSelectedYear] = useState(null)

  useEffect(() => {}, [projects])

  useEffect(() => {
    setCategoriesLoading(true)
    getCategories()
      .then((data) => setCategories(filterAndSortCategories(data)))
      .catch((error) => console.error("Categories API Error:", error))
      .finally(() => setCategoriesLoading(false))
  }, [])

  useEffect(() => {
    setIsLoading(true)
    const fetchProjects = selectedYear
      ? getArtProjectsByYear(selectedYear, page, pageSize)
      : getArtProjects({ page, pageSize })

    fetchProjects
      .then(({ data, totalPages }) => {
        setProjects(data)
        setTotalPages(totalPages)
        setIsLoading(false)
      })
      .catch((error) => {
        console.error("API Error:", error)
        setIsLoading(false)
      })
  }, [page, pageSize, selectedYear])

  return (
    <div>
      {categoriesLoading || isLoading ? (
        <div className="flex flex-wrap align-middle justify-center items-center h-screen">
          <img
            src={logoLoader}
            alt="Loading..."
            className="w-60 h-auto"
            style={{ objectFit: "contain" }}
          />
        </div>
      ) : (
        <>
          <div className="flex flex-wrap justify-center items-center mt-5 mx-4 gap-10 md:gap-15 md:mx-35 2xl:gap-0 2xl:gap-x-7 2xl:gap-y-16 2xl:mx-16 2xl:mt-16 ">
            {categories.map((category) => (
              <div
                key={category.id}
                onClick={() => {
                  setSelectedYear(category.description)
                  setPage(1)
                  navigate(`/projects/${category.description}`) // <-- Add this line
                }}
                className={`cursor-pointer transition-all duration-200 ${
                  selectedYear === category.description ? "scale-105" : ""
                }`}
              >
                <Project
                  title={{ rendered: category.name }}
                  date={category.description}
                  content={{ rendered: "" }}
                  id={category.id}
                />
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
