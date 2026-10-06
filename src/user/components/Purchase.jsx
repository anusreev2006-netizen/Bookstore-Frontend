import React from 'react'

function Purchase() {
  return (
    <div className='p-10 my-15 shadow rounded'>
      {/* duplicate book */}
      <div className='p-5 rounded mt-4 bg-blue-100'>
        <div className='md:grid grid-cols-[3fr_1fr]'>
            <div className='px-4'>
                <h1 className='text-2xl'>Title</h1>
                <h2 className='text-xl'>Auther</h2>
                <h3 className='text-lg text-blue-500'>$ Discount Price</h3>
                <p className='text-justify'>Abstract</p>
                {/* status image */}
                <div className='flex my-3'>
                    <img width={'120px'} height={'120px'} src="https://thumbs.dreamstime.com/b/purchase-stamp-round-sign-label-transparent-background-352589731.jpg" alt="Pending" />
                    
                </div>
            </div>
            <div className='px-4 mt-4 md:mt-0'>
                <img className='w-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc7sYEGZDIs1TKn-DkVVXvHZMLZs4A1Xj1lQwdZBFg2DCRblHxbKQVBK6u&s=10" alt="book" />
                
            </div>
        </div>
      </div>
    </div>
  )
}

export default Purchase
