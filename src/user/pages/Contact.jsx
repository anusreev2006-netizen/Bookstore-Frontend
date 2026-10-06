import React from 'react'
import Header from '../components/Header'
import { FaLocationPin } from 'react-icons/fa6'
import { FaPaperPlane, FaPhoneAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

function Contact() {
  return (
    <>
      <Header/>

      <div className='md:px-20 p-5 my-5'>
        <h1 className='text-center my-5 font-bold text-3xl'>Contact Us</h1>
        <p className='text-justify'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium eligendi, optio quaerat sed minima exercitationem mollitia sint! Quidem, excepturi. Pariatur dolore maiores, itaque excepturi dignissimos laboriosam deleniti! Minima, similique minus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore consectetur vero minus consequuntur iure! Iusto harum maiores quia tenetur corporis quaerat nulla laudantium. Quae officia sint, ducimus aliquam alias similique!</p>
        <div className='md:grid grid-cols-3 text-center md:px-40 p-5 mt-5 md:mt-0'>
          <div className='flex items-center'>
            <div style={{width:'50px',height:'50px',borderRadius:'50%'}} className='flex items-center justify-center bg-gray-200'>
              <FaLocationPin  />
            </div>
            <p className='ms-5'>1234 main road,wertyjbdrty </p>
          </div>
          <div className='flex items-center'>
            <div style={{width:'50px',height:'50px',borderRadius:'50%'}} className='flex items-center justify-center bg-gray-200'>
              <FaPhoneAlt />
            </div>
            <p className='ms-5'>123456789 </p>
          </div>
          <div className='flex items-center'>
            <div style={{width:'50px',height:'50px',borderRadius:'50%'}} className='flex items-center justify-center bg-gray-200'>
              <MdEmail />
            </div>
            <p className='ms-5'>bookstore@gmail.com </p>
          </div>

        </div>
        <div className='md:grid grid-cols-2 gap-2 my-5 p-5 items-center md:px-40'>
          <div className='bg-gray-200 p-5 text-center'>
            <h1 className='font-semibold text-2xl '>Send Us Messege</h1>
            <form>
              <div className='mb-5 my-10'>
                <input type="text" placeholder='Name' className='bg-white w-full p-2 rounded' />
              </div>
               <div className='mb-5 my-10'>
                <input type="text" placeholder='Email' className='bg-white w-full p-2 rounded' />
              </div>
               <div className='mb-5 my-10'>
                <input type="text" placeholder='Messege' className='bg-white w-full p-2 rounded' />
              </div>
              <div className='mb-5'>
                <button className='bg-black p-2 w-full text-white text-lg flex justify-center items-center rounded'><FaPaperPlane className='ms-2 me-2' />Submit</button>
              </div>
            </form>
          </div>
          <div className='p-10'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.975217565077!2d76.34006767479387!3d10.01890359008749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080ffce877d5ef%3A0x8bef6870ad11b98!2sLuminar%20Technolab!5e0!3m2!1sen!2sin!4v1789584804715!5m2!1sen!2sin" width="100%" height="400" style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>
          </div>

        </div>
      </div>
    </>
  )
}

export default Contact
