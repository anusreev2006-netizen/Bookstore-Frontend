import apiService from "../api/apiService";

// register : auth component when click register button
export const registerAPI = async (userData)=>{
    return await apiService("POST","/register",userData)
}

// login : auth component when click login button
export const loginAPI = async (userData)=>{
    return await apiService("POST","/login",userData)
}

// google-login api : auth component when cliking on google login button
export const googleLoginAPI = async (userData)=>{
    return await apiService("POST","/google-login",userData)
}

// Edit user api : edit component when cliking on edit button
export const userUpdateAPI = async (userId,userData)=>{
    return await apiService("PUT",`/user/${userId}`,userData)
}

// add book api : uploadBook component when cliking on add button
export const addBookAPI = async (bookDetailes)=>{
    return await apiService("POST",`/book`,bookDetailes)
}

// get home book api : home component when page loads
export const getHomeBooksAPI = async ()=>{
    return await apiService("GET",`/home-books`,{})
}

// get all book api : book component when page loads
export const getAllBooksAPI = async (searchKey)=>{
    return await apiService("GET",`/all-books?search=${searchKey}`,{})
}

// get user  book api : bookstatus component when it opens
export const getUserBooksAPI = async ()=>{
    return await apiService("GET",`/user-books`,{})
}

// get user brought book api : book component when it page opens
export const getUserBroughtBooksAPI = async ()=>{
    return await apiService("GET",`/brought-books`,{})
}

// delete user uploaded book api : bookstatus component when click on delete button
export const deleteUserBookAPI = async (bookId)=>{
    return await apiService("DELETE",`/book/${bookId}`,{})
}

// get view book api : book component when page loads
export const viewBookAPI = async (id)=>{
    return await apiService("GET",`/view-books/${id}`,{})
}

// buy book
export const buyBookAPI = async (id)=>{
    return await apiService("PUT",`/books/${id}/buy`,{})
}

// Edit admin api : admin settings  component when cliking on edit button
export const adminUpdateAPI = async (adminId,adminData)=>{
    return await apiService("PUT",`/admin/${adminId}`,adminData)
}

// get all users api : admin resources  component  
export const usersListAPI = async ()=>{
    return await apiService("GET",`/user-list`,{})
}

// get all books api : admin resources  component  
export const bookListAPI = async ()=>{
    return await apiService("GET",`/book-list`,{})
}

// update book status api : admin resources  component  
export const editBookStatusAPI = async (id)=>{
    return await apiService("PUT",`/book/${id}`,{})
}

// get book detailes from ai
export const getBookDetailesAIAPI = async (title)=>{
    return await apiService("POST",`/book-ai`,{title})
}