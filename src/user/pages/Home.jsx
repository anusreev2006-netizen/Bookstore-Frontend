import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Header'
import { FaSearch } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { getHomeBooksAPI } from '../../services/allAPI'
import {searchContext} from '../../contextAPI/ShareContext'
import { ToastContainer, toast } from 'react-toastify';


function Home() {
  const navigate = useNavigate()
  const {searchKey,setSearchKey} = useContext(searchContext)
  const [homeBooks, setHomeBooks] = useState([])

  console.log(searchKey);
  
  useEffect(()=>{
    getHomeBooks()
  },[])

  const getHomeBooks = async()=>{
    const result = await getHomeBooksAPI()
    if(result.status==200){
      setHomeBooks(result.data)
    }
  }

  const handleSearch = ()=>{
    if(!searchKey){
      toast.warning("Please Input a Book Title ")
    }else if(!sessionStorage.getItem("token")){
      toast.warning("Please Login to Explore More...!!")
      setTimeout(() => {
        navigate("/login")
      }, 2000);
    }else if(searchKey && sessionStorage.getItem("token")){
      navigate('/books')
    }else{
      toast.error("Somthing Went Wrong!!!")
    }
  }
  return (
    <>
      <Header/>
      {/* hero section */}
      <div style={{height:'500px'}} className='flex flex-col justify-center items-center bg-[url(/landing.png)] bg-cover bg-center text-white'>
      <div style={{height:'500px',backgroundColor:'rgba(0,0,0,0.4)'}} className='w-full flex flex-col justify-center items-center'>
      <h1 className='text-6xl font-bold'>Wonderful Books</h1>
      <p>Gift your family and friends a book</p>
      <input onChange={(e)=>setSearchKey(e.target.value)} type="text" placeholder='Search a book' className='bg-white p-2 rounded-3xl w-100 text-black mt-2' />
      <FaSearch onClick={handleSearch} className='text-gray-500 cursor-pointer' style={{marginTop:'-28px',marginLeft:'360px'}} />
      </div>
       </div>
       {/* new arrivals */}
       <section className='md:px-40 my-5 p-5 flex-col justify-center items-center'>
        <h1 className='text-3xl font-bold '>NEW ARRIVALS</h1>
        <h1 className='text-3xl my-2'>Explore Our Letest Collection</h1>
        <div className='md:grid grid-cols-4 md:my-0'>
          {/* duplicate cards */}
          {
            homeBooks.length>0 ?
            homeBooks.map(book=>( 
              <div key={book?._id} className='shadow rounded p-3 m-4 md:my-0'>
                <img width={'100%'} height={'300px'} src={book?.imageURL} alt="" />
                  <div className='flex flex-col justify-center items-center mt-4'>
                    <h2 className='text-blue-600 font-bold text-xl'>{book?.author}</h2>
                    <h3 className='text-lg'>{book?.title}</h3>
                    <p className='text-red-500 font-bold'>₹{book?.discontPrice}</p>
                  </div>
              </div>
            ))
            :
            <p className='font-bold text-center my-3'>Loading....</p>
          }
        </div>
        {/* button */}
        <div className='text-center my-10'>
          <Link to={'/books'} className='bg-black p-3 text-white font-black'>Explore More...</Link>
        </div>

       </section>
       {/* Authers */}
       <section className='md:grid grid-cols-2 items-center gap-10 p-5 md:px-40 '>
        <div className='text-center'>
          <h2 className='text-2xl font-bold'>FEATURED AUTHERS</h2>
          <h3 className='text-xl'>Captivates with every word</h3>
          <p className='my-5 text-justify'>Welcome to the Author Spotlight section of our bookstore website! This feature is designed to celebrate writers, showcase their creative journeys, and help readers discover the minds behind their favorite books.</p>

          <p className='text-justify'>Our Author Features include:</p>

          <p className='text-justify my-3'><span className='font-black '>✨ Author Profiles :</span> Get to know each author through detailed profiles that highlight their biography, writing style, achievements, and personal inspirations.</p>

          <p className='text-justify my-3'><span className='font-black'>📖 Published Works :</span> Explore a curated list of books written by the author with quick access to book details, reviews, and purchase options.</p>

          <p className='text-justify my-3'><span className='font-black '>🎤 Interviews & Insights :</span>Exclusive interviews, behind-the-scenes stories, and writing tips that offer a deeper look into the author’s creative world.</p>
        </div>
        <div className='p-5 flex items-center justify-center'>
          <img src="https://png.pngtree.com/png-vector/20231122/ourmid/pngtree-happy-business-woman-business-png-image_10614739.png" alt="Author" />
        </div>
       </section>
       {/* testimonials */}
       <section className='md:px-40 my-5 p-5 flex flex-col justify-center items-center'>
        <h1 className='text-3xl font-bold'>TESTIMONIALS</h1>
        <h1 className='text-3xl my-2'> See What Others Are Saying</h1>
        <div className='my-5 flex flex-col justify-center items-center'>
          <img width={'200px'} height={'200px'} style={{borderRadius:'50%'}} src="https://media.easy-peasy.ai/ebf844cf-e005-4b68-9721-a6aa2aa19579/c75fb7fe-18cb-46b4-88ad-ee05f073493d_medium.webp" alt="User"/>
          <h3 className='my-3'>Luca</h3>
          <p className='text-justify'>This bookstore has completely changed the way I discover new books. The recommendations are always spot-on, and the delivery is super fast. I love the clean interface and the huge collection! The user experience is amazing! Easy navigation, great deals, and beautifully organized categories. I appreciate how quickly customer support responds too.</p>
        </div>

       </section>
      {/* toast container */}
      <ToastContainer position='top-center' theme='colored' autoClose={3000}/>
    </>
  )
}

export default Home
