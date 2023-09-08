/* eslint-disable react/prop-types */
const Button = (props) => {
  const {children = "...", classname = "bg-black"} = props;
  return (
    <button 
      className={`px-6 py-2 text-white ${classname} rounded-md font-semibold`}
      type='submit'>
      {children}
    </button>
  )
}

export default Button