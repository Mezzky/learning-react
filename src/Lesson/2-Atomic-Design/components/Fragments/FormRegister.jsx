import InputForm from "../Elements/Input/InputForm"
import Button from "../Elements/Button/Button"

const FormRegister= () => {
  return (
    <form action="" autoComplete='off'>
      <InputForm 
        label="Username" 
        type="text" 
        name="username" 
        placeholder="John Doe" 
      />
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
      <InputForm 
        label="Confirm Password" 
        type="password" 
        name="confirmPassword" 
        placeholder="********" 
      />
      <Button 
        classname="bg-emerald-600 w-full duration-300 hover:bg-emerald-500">
        Register
      </Button>
      <p className="pt-2">Already have an account <a className="text-green-500 hover:underline" href="/login">Login</a> here</p>
    </form>
  )
}

export default FormRegister