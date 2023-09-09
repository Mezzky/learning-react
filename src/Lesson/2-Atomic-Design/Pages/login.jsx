import FormLogin from "../components/Fragments/FormLogin"
import AuthLayout from "../components/Layouts/AuthLayout"

const login = () => {
  return (
    <AuthLayout title="Sign In">
      <FormLogin/>
    </AuthLayout>
  )
}

export default login