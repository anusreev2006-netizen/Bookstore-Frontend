import React from 'react'
import { FaPlus } from 'react-icons/fa'

function UploadBook() {
  return (
    <div className='p-10 my-20 mx-5 bg-blue-100'>
      <h1 className='text-center text-3xl font-medium'>Upload Book Details</h1>
      <div className='md:grid grid-cols-2 mt-10 w-full'>
        <div className='px-3'>
            <div className='mb-3'>
                <input type="text"placeholder='Book Title' className='w-full p-2 rounded bg-white' />
            </div>
            <div className='mb-3'>
                <input type="text"placeholder='Auther ' className='w-full p-2 rounded bg-white' />
            </div>
            <div className='mb-3'>
                <input type="text"placeholder='Cover image URL ' className='w-full p-2 rounded bg-white' />
            </div>
            <div className='mb-3'>
                <input type="text"placeholder='Total Pages' className='w-full p-2 rounded bg-white' />
            </div>
            <div className='mb-3'>
                <input type="text"placeholder='Original Price ' className='w-full p-2 rounded bg-white' />
            </div>
            <div className='mb-3'>
                <input type="text"placeholder='Discount Price' className='w-full p-2 rounded bg-white' />
            </div>
            <div className='mb-3'>
                <textarea type="text"placeholder='Abstract' rows={'4'} className='w-full p-2 rounded bg-white' />
            </div>
        </div>
        <div className='px-3'>
            <div className='mb-3'>
                <input type="text"placeholder='Publisher' className='w-full p-2 rounded bg-white' />
            </div>
            <div className='mb-3'>
                <input type="text"placeholder='ISBN ' className='w-full p-2 rounded bg-white' />
            </div>
            <div className='mb-3'>
                <input type="text"placeholder='Language ' className='w-full p-2 rounded bg-white' />
            </div>
            <div className='mb-3'>
                <input type="text"placeholder='Category ' className='w-full p-2 rounded bg-white' />
            </div>
            {/* upload book image */}
            <div className='mb-3 flex justify-center items-center mt-10'>
                <label htmlFor="BookImg">
                    <input type="file" id='BookImg' hidden />
                    <img width={'200px'} height={'200px'} src="https://www.freeiconspng.com/uploads/upload-icon-15.png" alt="Book file not found" />
                </label>
            </div>
            {/* preview of uploaded books */}
            <div className='flex justify-center items-center'>
                <img width={'70px'} height={'70px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJnNNRJ0geTv03IK6ddbamahrCL67MFHZCIOWZGmmCcheI9yJTzecsMZs&s=10" alt=" Book image" />
                <label htmlFor="bookUpload">
                    <input type="file" id='bookUpload' hidden />
                    <FaPlus className='text-3xl ms-2'/>
                </label>
            </div>
        </div>
      </div>
      <div className='flex md:justify-end justify-center w-full px-5 mt-5'>
        <button className='bg-yellow-500 text-white p-3 rounded me-2'>Reset</button>
        <button className='bg-green-500 text-white p-3 rounded'>Add Book</button>
      </div>
    </div>
  )
}

export default UploadBook
