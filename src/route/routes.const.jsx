import { React, lazy } from 'react';
const Home = lazy(() => import('../views/home/Home.jsx'));
const Projects = lazy(() => import('../views/projects/Projects.jsx'));
const Project = lazy(() => import('../views/project/Project.jsx'));
const Layout = lazy(() => import('../components/sharedComponents/layout/Layout.jsx'));
const About = lazy(() => import('../views/about/About.jsx'));
const Booking = lazy(() => import('../views/booking/Booking.jsx'));


export const routes=[
{
    path : "/",
    element:<Layout><Home /></Layout>,
},
{
    path : "/projects",
    element: <Layout><Projects/></Layout>,
},
{
    path : "/project",
    element: <Layout><Project/></Layout>,
},
{
    path : "/about",
    element: <Layout><About/></Layout>,
},
{
    path : "/booking",
    element: <Layout><Booking/></Layout>,
}
]