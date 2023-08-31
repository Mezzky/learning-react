// eslint-disable-next-line no-unused-vars
import React from 'react'
// import Learn01 from './Lesson/1-Components-and-Props/learn01'
import Learn02 from './Lesson/2-Atomic-Design/Learn02'

const App = () => {
  return (
    <>
      <div className='Header grid grid-cols-1 place-items-center w-full py-5 border-b border-slate-900'>
        <h1 className='text-blue-500 text-2xl font-bold'>Welcome To Learning React</h1>
        <h2 className='text-purple-700 font-semibold'>with Mezzky</h2>
      </div>
      <div className="Container grid place-items-center w-full pt-32 px-10">
        {/* <Learn01/> */}
        <Learn02/>
      </div>
    </>
  )
}

export default App
