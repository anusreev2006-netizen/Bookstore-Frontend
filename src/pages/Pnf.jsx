import React from 'react'
import { Link } from 'react-router-dom'
Link
function Pnf() {
  return (
    <div className=' min-h-screen flex justify-center items-center flex-col'>
        <img className='w-100' src="https://assets.dochipo.com/editor/animations/404-error/986fdadf-8dc2-4a46-aea7-8f9002ebaed0.gif" alt="Page not found" />
        <p >Oh No !</p>
        <h1 className='text-4xl font-semibold my-2'>Look Like You're Lost</h1>
        <p>The page you are looking for is not available</p>
        <Link to={'/'} className='bg-black text-white px-3 p-2 rounded my-2'>BACKHOME</Link>
    </div>
  )
}

export default Pnf
