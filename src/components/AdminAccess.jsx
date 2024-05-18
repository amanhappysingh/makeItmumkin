import React, { useLayoutEffect } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../contextProvider/authProvider'
import { Navigate, Outlet } from 'react-router-dom'

const AdminAccess = () => {
    const { token, user } = useContext(AuthContext)

    return (token && user?.role === '_Admin') ? <Outlet /> : <Navigate to="/admin/signin" />

}

export default AdminAccess
