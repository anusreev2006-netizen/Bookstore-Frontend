import React,{ createContext, useEffect, useState } from "react";

export const routeContext = createContext("")


function RouteGaurd({children}) {

    const [role,setRole] = useState("")
    const [autherisedUser,setAutherisedUser] = useState(false)

    useEffect(()=>{
        if(sessionStorage.getItem('token') && sessionStorage.getItem("user")){
            const user =JSON.parse(sessionStorage.getItem("user"))
            setAutherisedUser(true)
            setRole(user.role)
        }
    },[role,autherisedUser])
  return (
    <routeContext.Provider value={{role,setRole,autherisedUser,setAutherisedUser}}>
        {children}
    </routeContext.Provider>
  )
}

export default RouteGaurd
