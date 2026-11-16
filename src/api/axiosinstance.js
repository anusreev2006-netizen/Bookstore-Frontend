import axios from "axios";

const axiosInstance = axios.create({
    baseURL:"https://bookstore-backend-ir19.onrender.com/",
    timeout:10000
})

// request interseptors : Handling Token  append to headers
axiosInstance.interceptors.request.use(
    (config)=>{
        const token = sessionStorage.getItem("token")
        if(token){
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error)=>{
        return Promise.reject(error)
    }
)

// response interceptors : Handling global errors
axiosInstance.interceptors.response.use(
    (response)=>{
        console.log("Response received!!");
        return response
    },
    (error)=>{
        if(error.response){
            const status = error.response.status
            if(status==401){
                console.log("Unautherized Access-Redirecting to Login");
            }else if(status==404){
                console.log("API not Found!!");
            }else if(status==500){
                console.log("Server Error");
            }else if(error.request){
                console.log("No Response from server....");
                return error.request.response
            }else{
                console.log(`Error: ${error.message}`);
            }
            return Promise.reject(error)
            
        }
    }
)
export default axiosInstance