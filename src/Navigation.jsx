import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import React from 'react'

import Home from './pages/Home'

import Stories from './pages/Details/Stories'
import AboutUs from './pages/Details/AboutUs'
import ContactUs from './pages/Details/ContactUs.jsx'
import News from './pages/Details/News'
import Donation from './pages/Donation'
import Voluntier from './pages/Voluntier'
import AdminAccess from './components/AdminAccess'
import Admin from './pages/Dashboards/Admin/index.jsx'


import UserLayout from './components/UserLayout.jsx'

import Signin from './components/Signin.jsx'

import { AdminSidebar } from './components/AdminSidebar'
import EventGallery from './pages/Gallery'
import Error from './components/Error'


const router = createBrowserRouter([
  {
    path: "/",                         // root for all public pages
    element: <UserLayout />,
    errorElement: <UserLayout><Error /></UserLayout>,
    children: [
      { index: true, element: <Home /> },
      { path: "volunteer", element: <Voluntier /> },
      { path: "stories", element: <Stories /> },
      { path: "about-us", element: <AboutUs /> },
      { path: "blogs", element: <Stories /> },
      { path: "contact-us", element: <ContactUs /> },
      { path: "news", element: <News /> },
      { path: "gallery", element: <EventGallery /> },
      { path: "donate-us", element: <Donation /> },
    ],
  },

  // ---------- Auth ----------
  { path: "/admin-signin", element: <Signin /> },

  // ---------- Admin Area ----------
  {
    path: "/admin",
    element: <AdminAccess />,        // guards + layout for admin
    errorElement: <Error />,
    children: [
      { index: true, element: <Admin /> },
      // you can add more admin children here
    ],
  },

  // Fallback: unknown routes
  { path: "*", element: <Error /> },

]);

export default function Navigation() {
  return <RouterProvider router={router} />
}
