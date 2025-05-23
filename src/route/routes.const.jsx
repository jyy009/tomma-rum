import { React, lazy } from "react"
const Home = lazy(() => import("../views/home/Home.jsx"))
const Projects = lazy(() => import("../views/projects/Projects.jsx"))
const SingleProject = lazy(() => import("../views/project/SingleProject.jsx"))
const Layout = lazy(() =>
  import("../components/sharedComponents/layout/Layout.jsx")
)
const About = lazy(() => import("../views/about/About.jsx"))
const PageNotFound = lazy(() =>
  import("../views/pagenotfound/PageNotFound.jsx")
)

export const routes = [
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: "/projects",
    element: (
      <Layout>
        <Projects />
      </Layout>
    ),
  },
  {
    path: "/projects/:year",
    element: (
      <Layout>
        <SingleProject />
      </Layout>
    ),
  },
  {
    path: "/about",
    element: (
      <Layout>
        <About />
      </Layout>
    ),
  },
  {
    path: "*",
    element: (
      <Layout>
        <PageNotFound />
      </Layout>
    ),
  },
]
