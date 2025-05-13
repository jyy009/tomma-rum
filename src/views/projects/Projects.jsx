import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getCategories,
  getArtProjectsByYear,
} from "../../services/api";
import logoLoader from "../../../src/assets/tommarum-logo_TR-BLACK.png";
import Project from "../../components/sharedComponents/project/project";

function getFirstImageFromPostContent(html) {
  if (!html) return null;
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");
  const img = doc.querySelector("img");
  return img ? img.src : null;
}

const EXCLUDED_CATEGORIES = ["osynlig", "uncategorized", "utbyta", "nordingrå"];

const filterAndSortCategories = (categories) => {
  return categories
    .filter(
      (cat) => !EXCLUDED_CATEGORIES.includes(cat.name.trim().toLowerCase())
    )
    .sort((a, b) => {
      const yearA = Number(a.description);
      const yearB = Number(b.description);
      if (!isNaN(yearA) && !isNaN(yearB)) return yearB - yearA;
      if (!isNaN(yearA)) return -1;
      if (!isNaN(yearB)) return 1;
      return a.name.localeCompare(b.name);
    });
};

function Projects() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [categoriesLoading, setCategoriesLoading] = useState(true);
  const [selectedYear, setSelectedYear] = useState(null);
  const [categoryImages, setCategoryImages] = useState({});

  useEffect(() => {
    setCategoriesLoading(true);
    getCategories()
      .then((data) => setCategories(filterAndSortCategories(data)))
      .catch((error) => console.error("Categories API Error:", error))
      .finally(() => setCategoriesLoading(false));
  }, []);

  useEffect(() => {
    if (categories.length === 0) return;
    categories.forEach((category) => {
      if (!categoryImages[category.description]) {
        getArtProjectsByYear(category.description, 1, 10)
          .then(({ data }) => {
            const imageUrl = getFirstImageFromPostContent(
              data?.[0]?.content?.rendered
            );
            setCategoryImages((prev) => ({
              ...prev,
              [category.description]: imageUrl,
            }));
          })
          .catch(() => {
            setCategoryImages((prev) => ({
              ...prev,
              [category.description]: null,
            }));
          });
      }
    });
  }, [categories]);

  if (categoriesLoading) {
    return (
      <div className="flex flex-wrap align-middle justify-center items-center h-screen">
        <img
          src={logoLoader}
          alt="Loading..."
          className="w-60 h-auto"
          style={{ objectFit: "contain" }}
        />
      </div>
    );
  }

  return (
    <div>
      <div className="flex flex-wrap justify-center items-center mt-5 mx-4 gap-10 md:gap-15 md:mx-35 2xl:gap-0 2xl:gap-x-7 2xl:gap-y-16 2xl:mx-16 2xl:mt-16 ">
        {categories.map((category) => (
          <div
            key={category.id}
            onClick={() => {
              setSelectedYear(category.description);
              navigate(`/projects/${category.description}`);
            }}
            className={`cursor-pointer transition-all duration-200 ${
              selectedYear === category.description ? "scale-105" : ""
            }`}
          >
            <Project
              title={{ rendered: category.name }}
              date={category.description}
              id={category.id}
              imageUrl={categoryImages[category.description]}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;

