import { Route, RouterProvider, createBrowserRouter } from 'react-router-dom'

import React from 'react'
import Home from './pages/Home'
import Error from './pages/Error'
import Stories from './pages/Details/Stories'
import AboutUs from './pages/Details/AboutUs'
import ContactUs from './pages/Details/ContactUs.jsx'
import News from './pages/Details/News'
import Donation from './pages/Donation'
import Voluntier from './pages/Voluntier'
import AdminAccess from './components/AdminAccess'
import Admin from './pages/Dashboards/Admin/index.jsx'

const Navigation = () => {
    const routes = createBrowserRouter([
        {
            path: '/volunteer',
            element: <Voluntier />,
        },
        {
            path: '/',
            element: <Home />,

        },
        {
            path: '/stories',
            element: <Stories />,
        },
        {
            path: '/about-us',
            element: <AboutUs />,
        },
        {
            path: '/blogs',
            element: <Stories />,
        },
        {
            path: '/contact-us',
            element: <ContactUs />,
        },
        {
            path: '/news',
            element: <News />,
        },
        {
            path: '/donate-us',
            element: <Donation />,
        },
        {
            path: '/admin',
            element: <Route element={<AdminAccess />} >
                <Route index element={<Admin />} />
            </Route>
        },
    ])
    return (
        <RouterProvider router={routes} />
    )
}

export default Navigation
