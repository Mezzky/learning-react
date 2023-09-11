import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from './Lesson/2-Atomic-Design/Pages/login.jsx'
import RegisterPage from './Lesson/2-Atomic-Design/Pages/register.jsx'
import ErrorPage from './Lesson/2-Atomic-Design/Pages/404.jsx'

const router = createBrowserRouter([
  {
    path : '/',
    element : <div>Ini Home</div>,
    errorElement : <ErrorPage/>
  },
  {
    path : '/login',
    element : <LoginPage/>,
  },
  {
    path : '/register',
    element : <RegisterPage/>,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
