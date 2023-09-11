import { Link } from "react-router-dom"
import FormLogin from "../components/Fragments/FormLogin"
import AuthLayout from "../components/Layouts/AuthLayout"

const login = () => {
  return (
    <AuthLayout title="Sign In">
      <FormLogin/>
      <p className="pt-2 text-center">
        Don't have an account? {" "} 
        <Link className="text-green-500 hover:underline" to="/register">
          Sign Up {" "}
        </Link>
        Here
      </p>
    </AuthLayout>
  )
}

export default login