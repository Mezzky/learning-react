import FormLogin from "../components/Fragments/FormLogin"
import AuthLayout from "../components/Layouts/AuthLayout"

const login = () => {
  return (
    <AuthLayout title="Sign In" type="login">
      <FormLogin/>
      <FormLogin/>
      <FormLogin/>
      <FormLogin/>
      <FormLogin/>
    </AuthLayout>
  )
}

export default login
