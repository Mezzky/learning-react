import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import ErrorPage from './Pages/404'
import LoginPage from './Pages/login'
import RegisterPage from './Pages/register'
import HomePage from './Pages/home'
import NewLogin from './Pages/newlogin'
import Header from './components/Fragments/Header'

const router = createBrowserRouter([
  {
    path : '/',
    element : <HomePage/>,
    errorElement : <ErrorPage/>
  },
  {
    path : '/newlogin',
    element : <NewLogin/>,
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
    <Header/>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
