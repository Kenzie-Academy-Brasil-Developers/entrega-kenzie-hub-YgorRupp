import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DashboardPage from './pages/DashboardPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'

export const RoutesComponent = ({userRegister, userLogin, user }) => {
  return (
    <Routes>
        <Route path="/" element={<LoginPage userLogin={userLogin} />} />
        <Route path="/register" element={<RegisterPage  userRegister={userRegister} />}/>
        <Route path="/dashboard" element={<DashboardPage user={user} />}/>
    </Routes>
  )
}

