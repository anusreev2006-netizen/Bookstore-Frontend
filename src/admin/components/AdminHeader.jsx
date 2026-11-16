import React, { useContext } from 'react'
import { FaPowerOff } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { routeContext } from '../../contextAPI/RouteGaurd'

function AdminHeader() {
 
  const {role,setRole,autherisedUser,setAutherisedUser} = useContext(routeContext)
  
  const navigate = useNavigate()

  const logout = ()=>{
    sessionStorage.clear()
    setAutherisedUser(false)
    navigate('/')
  }
  return (
    <>
      {/* header top */}
      <div className='flex justify-between items-center p-3 md:mx20'>
        <div className='flex items-center'>
          <img width={'50px'}height={'50px'} src="https://thumbs.dreamstime.com/b/stack-colorful-books-vector-illustration-educational-concept-pile-one-open-top-design-isolated-white-background-book-graphic-320706062.jpg" alt="icon" />
          <h1 className='text-2xl font-bold ms-2'>BOOKSTORE</h1>
        </div>
        <button onClick={logout} className='flex items-center px-3 py-2 bg-black text-white rounded border-black hover:bg-white hover:text-black'>Logout<FaPowerOff className='ms-2 mt-1'/></button>
      </div>
      {/* header marquee */}
      <div className='w-full p-3 bg-black text-white'>
        <marquee>Wellcome Admin , You are all set to manage and monitor the system.Let's get into work!!!</marquee>
      </div>
    </>
  )
}

export default AdminHeader
