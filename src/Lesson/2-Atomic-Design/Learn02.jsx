/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'

// Arrow Function Component
const Button = (props) => {
  const {children = "...", variant = "bg-black"} = props;
  return (
    <button 
      className={`px-6 py-2 text-white ${variant} rounded-md font-semibold`}
      type='submit'>
      {children}
    </button>
  )
}

const Learn02 = () => {
  return (
    <div className='flex flex-col gap-5 items-center'>
      <h1 className='text-xl font-bold'>Ini adalah Materi Atomic Design</h1>
      <div className="flex gap-5">
        <Button variant="bg-blue-600">Login</Button>
        <Button variant="bg-red-600">Logout</Button>
        <Button variant="bg-slate-600">Register</Button>
        <Button></Button>
      </div>
    </div>
  )
}

export default Learn02
