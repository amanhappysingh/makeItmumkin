import React, { useLayoutEffect } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../contextProvider/authProvider'
import { Navigate, Outlet } from 'react-router-dom'
import { AdminSidebar } from './AdminSidebar'

const AdminAccess = () => {
    const { token, user } = { token : false , user : {
        role : "ADMIN"
    } }

    return (token && user?.role === 'ADMIN') ? <AdminSidebar><Outlet /></AdminSidebar> : <Navigate to="/admin-signin" />

}

export default AdminAccess
