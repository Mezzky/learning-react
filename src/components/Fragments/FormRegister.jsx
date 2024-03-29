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
        classname="bg-indigo-600 w-full duration-300 hover:bg-indigo-500">
        Register
      </Button>
    </form>
  )
}

export default FormRegister