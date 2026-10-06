import React, { useState } from 'react'
import Header from '../components/Header'
import { FaCheckCircle } from 'react-icons/fa'
import { CiEdit } from 'react-icons/ci'
import Edit from '../components/Edit'
import UploadBook from '../components/UploadBook'
import BookStatus from '../components/BookStatus'
import Purchase from '../components/Purchase'
function Profile() {
  const [currentTab,setCurrentTab] = useState(1)
  return (
    <>
      <Header/>
      <div style={{height:'200px'}} className='bg-black'></div>
      <div style={{width:"230px",height:'230px',borderRadius:'50%',marginTop:'-130px', marginLeft:'70px'}} className='bg-white p-3'>
        <img style={{width:'200px',height:'200px',borderRadius:'50%'}} src="https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png" alt="User" />
      </div>
      <div className='md:flex justify-between px-5'>
        <div className='flex items-center'>
          <h1 className=' text-2xl font-black md:text-3xl'>UserName</h1>
          <FaCheckCircle className='text-blue-700 ms-3'/>
        </div>
        <div><Edit/></div>
      </div>
      <p className='text-lg font-bold px-20 mt-5'>Bio</p>
      <p className=' text-justify md:px-20 px-5 my-5'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim quas mollitia fugiat placeat iusto, repudiandae qui voluptate. Accusantium nemo cupiditate aperiam, tempora id aspernatur vero voluptas veniam quis ducimus sint. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora aut voluptatem natus, minus rerum accusamus impedit aliquid voluptates eligendi ipsum nulla odit amet asperiores quos similique? Deserunt consequatur reiciendis nam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum neque deleniti distinctio minima unde iste rem facilis ipsa a ex. Reiciendis, delectus. Modi iste quam odit consequatur in quae laboriosam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis laudantium neque corporis blanditiis maxime. Deleniti repudiandae, explicabo eligendi, id minima a consequatur maxime voluptatibus maiores dolores, reiciendis corrupti porro possimus!
      </p>
      <div className='md:px-40'>
        {/* tabs */}
        <div className=' flex justify-center items-center my-8 font-medium text-lg'>
          <p onClick={()=>setCurrentTab(1)} className={currentTab == 1 ?'p-4 border-gray-400 border-l border-t border-r rounded cursor-pointer':'p-4 border-gray-400 border-b rounded cursor-pointer' }>Upload Book</p>
          <p onClick={()=>setCurrentTab(2)} className={currentTab == 2 ?'p-4 border-gray-400 border-l border-t border-r rounded cursor-pointer':'p-4 border-gray-400 border-b rounded cursor-pointer' }>Upload Book Status</p>
          <p onClick={()=>setCurrentTab(3)} className={currentTab == 3 ?'p-4 border-gray-400 border-l border-t border-r rounded cursor-pointer':'p-4 border-gray-400 border-b rounded cursor-pointer' }> Purchase History</p>
        </div>
        {/* tab content */}
        {
          currentTab ==1 &&
          <div> <UploadBook/></div>
        }
        {
          currentTab ==2 &&
          <div><BookStatus/></div>
        }
        {
          currentTab ==3 &&
          <div><Purchase/></div>
        }
      </div>
    </>
  )
}

export default Profile
