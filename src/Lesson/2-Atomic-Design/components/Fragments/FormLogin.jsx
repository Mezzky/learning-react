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
    </form>
  )
}

export default FormLogin