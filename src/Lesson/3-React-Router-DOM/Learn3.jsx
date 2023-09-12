import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from '../2-Atomic-Design/Pages/404'
import LoginPage from '../2-Atomic-Design/Pages/login'
import RegisterPage from '../2-Atomic-Design/Pages/register'

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

const Learn03 = () => {
  return(
    <div className='flex flex-col gap-5 items-center'>
      <RouterProvider router={router} />
    </div>
  )
}

export default Learn03