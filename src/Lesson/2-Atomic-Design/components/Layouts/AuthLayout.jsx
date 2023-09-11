/* eslint-disable react/prop-types */
const AuthLayout = (props) => {
  const { children, title } = props;

  return (
    <div className="w-full grid place-items-center h-screen">
      <div className="w-full max-w-xs">
        <h1 className='text-4xl font-bold mb-2 text-green-600'>{title}</h1>
        <p className="font-medium text-slate-500 mb-6">Welcome, please enter your details</p>
        {children}
      </div>
    </div>
  )
}

export default AuthLayout