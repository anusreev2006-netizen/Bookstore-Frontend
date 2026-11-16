import React, { useEffect, useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import { ToastContainer, toast } from 'react-toastify';
import { addBookAPI, getBookDetailesAIAPI } from '../../services/allAPI';
import useDebounce from '../../hooks/useDebounce';


function UploadBook() {
    const [bookDetailes,setBookDetailes] = useState({
        title:"",author:"",imageURL:"",pages:"",price:"",discontPrice:"",abstract:"",publisher:"",isbn:"",language:"",category:"",uploadImages:[]
    })
    const [preview,setPriview] = useState("")
    const [previewList,setPriviewList] = useState([])
    const debounceTitleSearch = useDebounce(bookDetailes.title,1000)
    // console.log(bookDetailes);

    useEffect(()=>{
        if(debounceTitleSearch){
            console.log("Gemini API Call");
            generateBookAbstractAI()
        }
    },[debounceTitleSearch])

    const generateBookAbstractAI = async()=>{
        // console.log(debounceTitleSearch);
      try {
          const result = await getBookDetailesAIAPI(debounceTitleSearch)
        console.log("API Response:",result.data);
        if(result.data?.content){
            setBookDetailes({
                ...bookDetailes,
                abstract:result.data.content.abstract,
                isbn:result.data.content.isbn,
                author:result.data.content.author
            })
        } else {
            console.log("Abstract not found in API response:",result.data);
            
        }
      } catch(error) {
        console.error(
            "Error generating book abstract:",error.response?.data || error.message
        );
      }  
    }
    
    const handleUploadImages = (e)=>{
        const imageFile = e.target.files[0]
        const uploadedImageArray =bookDetailes.uploadImages
        uploadedImageArray.push(imageFile)
        setBookDetailes({...bookDetailes,uploadImages:uploadedImageArray})
        const url = URL.createObjectURL(imageFile)
        setPriview(url)
        const demoPreviewList = previewList
        demoPreviewList.push(url)
        setPriviewList(demoPreviewList)
    }

    const resetForm = ()=>{
        setBookDetailes({title:"",author:"",imageURL:"",pages:"",price:"",discontPrice:"",abstract:"",publisher:"",isbn:"",language:"",category:"",uploadImages:[]})
        setPriview("")
        setPriviewList([])
    }

    const handleAddBook = async ()=>{
        const {title,author,imageURL,pages,price,discontPrice,abstract,publisher,isbn,language,category,uploadImages} = bookDetailes
        if(!title || !author || !imageURL || !pages || !price || !discontPrice || !abstract || !publisher || !isbn ||! language || !category || uploadImages.length==0){
            toast.info("Please fill the form completly")
        }else{
            // api call
            const reqBody = new FormData()
            for(let key in bookDetailes){
                if(key !="uploadImages"){
                    reqBody.append(key,bookDetailes[key])
                }else{
                    bookDetailes.uploadImages.forEach(imageFile=>{
                        reqBody.append("uploadImages",imageFile)
                    })
                }
            }
            const result = await addBookAPI(reqBody)
            console.log(result);
            if(result.status==201){
                toast.success("Book Added Successfully")
            }else{
                toast.warning(result)
            }
            resetForm()
        }
    }
  return (    
    <div className='p-10 my-20 mx-5 bg-blue-100'>
      <h1 className='text-center text-3xl font-medium'>Upload Book Details</h1>
      <div className='md:grid grid-cols-2 mt-10 w-full'>
        <div className='px-3'>
            <div className='mb-3'>
                <input value={bookDetailes.title} onChange={e=>setBookDetailes({...bookDetailes,title:e.target.value})} type="text"placeholder='Book Title' className='w-full p-2 rounded bg-white' />
            </div>
            <div className='mb-3'>
                <input value={bookDetailes.author} onChange={e=>setBookDetailes({...bookDetailes,author:e.target.value})} type="text"placeholder='Auther ' className='w-full p-2 rounded bg-white' />
            </div>
            <div className='mb-3'>
                <input value={bookDetailes.imageURL} onChange={e=>setBookDetailes({...bookDetailes,imageURL:e.target.value})} type="text"placeholder='Cover image URL ' className='w-full p-2 rounded bg-white' />
            </div>
            <div className='mb-3'>
                <input value={bookDetailes.pages} onChange={e=>setBookDetailes({...bookDetailes,pages:e.target.value})} type="text"placeholder='Total Pages' className='w-full p-2 rounded bg-white' />
            </div>
            <div className='mb-3'>
                <input value={bookDetailes.price} onChange={e=>setBookDetailes({...bookDetailes,price:e.target.value})} type="text"placeholder='Original Price ' className='w-full p-2 rounded bg-white' />
            </div>
            <div className='mb-3'>
                <input value={bookDetailes.discontPrice} onChange={e=>setBookDetailes({...bookDetailes,discontPrice:e.target.value})} type="text"placeholder='Discount Price' className='w-full p-2 rounded bg-white' />
            </div>
            <div className='mb-3'>
                <textarea value={bookDetailes.abstract} onChange={e=>setBookDetailes({...bookDetailes,abstract:e.target.value})} type="text"placeholder='Abstract' rows={'4'} className='w-full p-2 rounded bg-white' />
            </div>
        </div>
        <div className='px-3'>
            <div className='mb-3'>
                <input value={bookDetailes.publisher} onChange={e=>setBookDetailes({...bookDetailes,publisher:e.target.value})} type="text"placeholder='Publisher' className='w-full p-2 rounded bg-white' />
            </div>
            <div className='mb-3'>
                <input value={bookDetailes.isbn} onChange={e=>setBookDetailes({...bookDetailes,isbn:e.target.value})} type="text"placeholder='ISBN ' className='w-full p-2 rounded bg-white' />
            </div>
            <div className='mb-3'>
                <input value={bookDetailes.language} onChange={e=>setBookDetailes({...bookDetailes,language:e.target.value})} type="text"placeholder='Language ' className='w-full p-2 rounded bg-white' />
            </div>
            <div className='mb-3'>
                <input value={bookDetailes.category} onChange={e=>setBookDetailes({...bookDetailes,category:e.target.value})} type="text"placeholder='Category ' className='w-full p-2 rounded bg-white' />
            </div>
            {/* upload book image */}
            <div className='mb-3 flex justify-center items-center mt-10'>
                <label htmlFor="BookImg">
                    {
                        previewList.length<3 ?
                        <>
                        <input onChange={e=>handleUploadImages(e)} type="file" id='BookImg' hidden />
                        <img width={'200px'} height={'200px'} src={preview?preview:"https://www.freeiconspng.com/uploads/upload-icon-15.png"} alt="Book file not found" />
                        </>
                        :
                        
                        <img width={'200px'} height={'200px'} src={preview?preview:"https://www.freeiconspng.com/uploads/upload-icon-15.png"} alt="Book file not found" />
                    }
                </label>
            </div>
            {/* preview of uploaded books */}
          {
            preview &&
              <div className='flex justify-center items-center'>
                {
                    previewList?.map((imageURL,index)=>(
                        <img key={`${imageURL}.${index}`} width={'70px'} height={'70px'} className='mx-2' src={imageURL} alt=" Book image" />
                    ))
                }
               {
               previewList.length<3 &&
                <label htmlFor="bookUpload">
                    <input onChange={e=>handleUploadImages(e)} type="file" id='bookUpload' hidden />
                    <FaPlus className='text-3xl ms-2'/>
                </label>
               }
            </div>
          }
        </div>
      </div>
      <div className='flex md:justify-end justify-center w-full px-5 mt-5'>
        <button onClick={resetForm} className='bg-yellow-500 text-white p-3 rounded me-2'>Reset</button>
        <button onClick={handleAddBook} className='bg-green-500 text-white p-3 rounded'>Add Book</button>
      </div>
      {/* toast container */}
       <ToastContainer position='top-center' theme='colored' autoClose={3000}/>
    </div>
  )
}

export default UploadBook
