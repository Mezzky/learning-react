import { Link } from "react-router-dom"
import FormRegister from "../components/Fragments/FormRegister"
import AuthLayout from "../components/Layouts/AuthLayout"

const register = () => {
  return (
    <AuthLayout title="Register">
      <FormRegister/>
      <p className="pt-2 text-center">
        Already have an account? {" "} 
        <Link className="text-green-500 hover:underline" to="/login">
          Sign In {" "}
        </Link>
        Here
      </p>
    </AuthLayout>
  )
}

export default register