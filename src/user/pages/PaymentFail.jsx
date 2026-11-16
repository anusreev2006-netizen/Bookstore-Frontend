import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'

function PaymentFail() {
  return (
    <>
        <Header/>
        <div className='container min-h-screen flex justify-center items-center'>
            <div className='md:grid grid-cols-2 px-20 justify-center items-center my-10'>
                <div>
                    <h1 className='text-red-500 md:text-4xl font-bold'>Sorry...!! Payment Declined...</h1>
                    <p className='text-2xl my-10'>We Apologize for the inConvience...</p>
                    <Link to={'/books'} className='flex items-center bg-blue-500 w-60 p-2 text-white font-bold rounded'>Explore More Books...</Link>
                </div>
                <div className='flex justify-center items-center'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEy49LbaZZkopL9vztij5Tgh2EQ3mDMvKjBg2N5laNuIv-l_lCCyf6CUY&s=10" alt="" />
                </div>
            </div>
        </div>
    </>
  )
}

export default PaymentFail
