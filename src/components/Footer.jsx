import React from 'react'
import { FaArrowRight, FaFacebookF, FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { IoMdMail } from 'react-icons/io'

function Footer() {
  return (
    < >
    <div className=' bg-black text-white p-3 rounded mt-2'>
     <div className=' p-4 md:grid grid-cols-3 gap-10'>
      <div className='me-2 mt-6'>
        <h1 className='mb-4 text-xl font-bold '>ABOUT US</h1>
        <p className='text-justify mt-5'>We believe books are more than just pages - they are windows into new worlds, teachers of wisdom, and companions for life.Oure journey began with a passion for storytelling and a mission to make rading accessible, enjoyable, and inspiring for everyone </p>
      </div>
      <div className='mt-6'>
        <h1 className='mb-4 text-xl font-bold '>NEWS LETTER</h1>
        <p>Stay updated with our latest trends</p>
        <div className='flex mt-4'>
        <input className='bg-white text-black border  me-0.5 ' type="email" placeholder=' E Mail' /><button className=' bg-amber-400 p-2'><FaArrowRight  className='text-2xl mt-1 '/></button>
        </div>
      </div>
      <div className='mt-6'>
        <div className='me-2'>
        <h1 className='mb-4 text-xl font-bold '>FOLLOW US</h1>
        <p> Let us be social </p>
        <div className='flex gap-3 mt-4'>
          <FaFacebookF />
          <FaInstagram />
          <FaXTwitter />
          <IoMdMail />

        </div>
      </div>
      </div>
      
      </div> 
      <p className='text-center'>Copyright &copy; 2026 All rights reserved | This website is made with 🤍 By Luminar Technolab</p>
      </div>
    </>
  )
}

export default Footer
