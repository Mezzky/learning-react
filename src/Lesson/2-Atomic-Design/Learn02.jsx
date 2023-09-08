/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import Button from './components/Elements/Button'

const Learn02 = () => {
  return (
    <div className='flex flex-col gap-5 items-center'>
      <div className="w-full max-w-xs">
        <h1 className='text-4xl font-bold mb-2 text-green-600'>Sign In</h1>
        <p className="font-medium text-slate-500 mb-6">Welcome, please enter your details</p>
        <form action="">
          <div className="mb-6">
            <label htmlFor="email" className="block text-slate-700 mb-2 text-sm font-bold">
              Email
            </label>
            <input 
              type="email" 
              className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder: opacity-50"
              placeholder="example@gmail.com" 
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-slate-700 mb-2 text-sm font-bold">
              Password
            </label>
            <input 
              type="password" 
              className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder: opacity-50"
              placeholder="********" 
            />
          </div>
          <Button classname="bg-emerald-600 w-full duration-300 hover:bg-emerald-500">Sign In</Button>
        </form>
      </div>
    </div>
  )
}

export default Learn02
