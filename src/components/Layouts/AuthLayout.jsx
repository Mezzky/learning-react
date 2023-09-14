/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"

const AuthLayout = (props) => {
  const { children, title, type } = props;

  return (
    <div className="w-full grid place-items-center h-screen">
      <div className="w-full max-w-xs">
        <h1 className='text-4xl font-bold mb-2 text-green-600'>{title}</h1>
        <p className="font-medium text-slate-500 mb-6">Welcome, please enter your details</p>
        {children}
        <Navigation type={type}/>
      </div>
    </div>
  )
}

const Navigation = ({type}) => {
  if( type === 'login' ){
    return (
      <p className="pt-2 text-center">
        Don't have an account? {" "}
        <Link className="text-green-500 hover:underline" to="/register">
          Sign Up {" "}
        </Link>
        Here
      </p>
    )
  } else {
    return(
      <p className="pt-2 text-center">
        Already have an account? {" "}
        <Link className="text-green-500 hover:underline" to="/login">
          Sign In {" "}
        </Link>
        Here
      </p>
    )
  }
}

export default AuthLayout