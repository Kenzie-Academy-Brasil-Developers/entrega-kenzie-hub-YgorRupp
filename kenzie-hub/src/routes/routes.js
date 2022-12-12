import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ProtectedRoutes from '../components/ProtectedRoutes'
import { TechProvider } from '../contexts/TechContext'
import DashboardPage from '../pages/DashboardPage'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'

export const RoutesComponent = () => {
  return (
    <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />}/>
        {/* <Route path="/dashboard" element={<ProtectedRoutes />} /> */}
          <Route path="/dashboard" element={<DashboardPage />}/>
    </Routes>
  )
}

