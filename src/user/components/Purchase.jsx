import React, { useEffect, useState } from 'react'
import { getUserBroughtBooksAPI } from '../../services/allAPI';

function Purchase() {

   const [purchaseBooks,setPurchaseBooks] = useState([])
    console.log(purchaseBooks);
  
    useEffect(()=>{
      getBroughtBooks()
    },[])
  
    const getBroughtBooks = async ()=>{
      const result = await getUserBroughtBooksAPI()
      setPurchaseBooks(result.data)
    }

  return (
    <div className='p-10 my-15 shadow rounded'>
      {/* duplicate book */}
      {
        purchaseBooks?.length>0 ?
        purchaseBooks.map(book=>(
          <div className='p-5 rounded mt-4 bg-blue-100'>
            <div className='md:grid grid-cols-[3fr_1fr]'>
                <div className='px-4'>
                    <h1 className='text-2xl'>{book?.title}</h1>
                    <h2 className='text-xl'>{book?.author}</h2>
                    <h3 className='text-lg text-blue-500'>₹{book?.discontPrice}</h3>
                    <p className='text-justify'>{book?.abstract}</p>
                    {/* status image */}
                    <div className='flex my-3'>
                        <img width={'120px'} height={'120px'} src="https://thumbs.dreamstime.com/b/purchase-stamp-round-sign-label-transparent-background-352589731.jpg" alt="Pending" />
                        
                    </div>
               </div>
                <div className='px-4 mt-4 md:mt-0'>
                    <img className='w-full' src={book?.imageURL} alt="book" />
                    
                </div>
            </div>
          </div>
        ))
        :
        <div className='text-center font-bold my-5'>No Book Purchased Yet!!!</div>
      }
    </div>
  )
}

export default Purchase
