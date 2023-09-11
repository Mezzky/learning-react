import InputForm from "../Elements/Input/InputForm"
import Button from "../Elements/Button/Button"

const FormLogin = () => {
  return (
    <form action="" autoComplete='off'>
      <InputForm 
        label="Email" 
        type="email" 
        name="email" 
        placeholder="example@gmail.com" 
      />
      <InputForm 
        label="Password" 
        type="password" 
        name="password" 
        placeholder="********" 
      />
      <Button 
        classname="bg-emerald-600 w-full duration-300 hover:bg-emerald-500">
        Sign In
      </Button>
      <p className="pt-2">Did not have an account please <a className="text-green-500 hover:underline" href="/register">register</a></p>
    </form>
  )
}

export default FormLogin