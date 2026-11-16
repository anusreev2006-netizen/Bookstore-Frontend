import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
function PaymentSuccess() {
  return (
    <>
    <Header/>
    <div className='container min-h-screen flex justify-center items-center'>
        <div className='md:grid grid-cols-2 px-20 justify-center items-center my-10'>
            <div>
                <h1 className='text-green-700 md:text-4xl font-bold'>Congratulations....!!!</h1>
                <p className='text-2xl my-10'>Thank you for your Purchase....</p>
                <Link to={'/books'} className='flex items-center bg-blue-500 w-60 p-2 text-white font-bold rounded'>Explore More Books...</Link>
            </div>
            <div className='flex justify-center items-center'>
                <img src="https://i.pinimg.com/originals/f0/2a/f5/f02af5201c305c0960eea6d4f297fcbf.gif" alt="" />
            </div>
        </div>
    </div>
    </>
  )
}

export default PaymentSuccess
