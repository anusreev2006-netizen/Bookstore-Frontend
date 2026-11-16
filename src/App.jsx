
import { Route, Routes } from 'react-router-dom'
import './App.css'

// user page
import Home from './user/pages/Home'
import Books from './user/pages/Books'
import Contact from './user/pages/Contact'
import Profile from './user/pages/Profile'
import View from './user/pages/View'

// admin page
import AdminDashboard from './admin/pages/AdminDashboard'
import AdminResource from './admin/pages/AdminResource'
import AdminSettings from './admin/pages/AdminSettings'

// pages
import Auth from './pages/Auth'
import Pnf from './pages/Pnf'

// component
import Footer from './components/Footer'
import Preloader1 from './components/Preloader1'
import { useContext, useState } from 'react'
import PaymentSuccess from './user/pages/PaymentSuccess'
import PaymentFail from './user/pages/PaymentFail'
import { routeContext } from './contextAPI/RouteGaurd'

function App() {

  const {role,setRole,autherisedUser,setAutherisedUser} = useContext(routeContext)
  const [isLoading, setIsLoading] = useState(true)

  setTimeout(()=>{
    setIsLoading(false)
  },6000)

  return (
    <>
    <Routes>
      <Route path='/' element={isLoading?<Preloader1/>:<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/login' element={<Auth/>}/>
      <Route path='/register' element={<Auth insideRegister/>}/>

   { 
      role=="user" &&
      <>
      <Route path='/books' element={<Books/>}/>
        <Route path='/profile/:id' element={<Profile/>}/>
        <Route path='/book/:id' element={<View/>}/>
        <Route path='/success' element={<PaymentSuccess/>}/>
        <Route path='/failed' element={<PaymentFail/>}/>
      </>
      
   }

      {
        role=="admin" &&
          <>
            <Route path='/admin' element={<AdminDashboard/>}/>
            <Route path='/admin/resources' element={<AdminResource/>}/>
            <Route path='/admin/settings' element={<AdminSettings/>}/>
          </>

      }
      <Route path='/*' element={<Pnf/>}/>

    </Routes>
    <Footer/>
    </>
  )
}

export default App
