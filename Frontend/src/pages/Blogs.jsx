import React from 'react'
import { useState,useEffect } from 'react'
import axios from "axios"
import BlogCard from '../components/BlogCard'

export const Blogs = () => {
 
  const [blogs,setBlogs] = useState([])

 //get All blogs
 const getAllBlogs = async () =>{
  try {
    const {data} = await axios.get("http://localhost:5000/api/v1/user/all-blog")
     if(data?.success){
      setBlogs(data?.blogs)
     }
  } catch (error) {
    console.log(error);
  }
 };

 useEffect(()=>{
  getAllBlogs();
 },[]);
//  console.log(blogs.user.username);
  return (
    <div>
    
      {blogs && blogs.map((blog)=> <BlogCard 
         id={blog?._id}
         isUser={localStorage.getItem("userId") === blog?.user?._id}
       title ={blog?.title}
       description={blog?.description}
       image ={blog?.image}
       username={blog?.user}
       time ={blog.createdAt}
      />)}
    </div>
  )
}
