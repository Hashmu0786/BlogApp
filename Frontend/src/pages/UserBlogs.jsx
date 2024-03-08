import React from 'react'
import { useState,useEffect} from 'react'
import axios from "axios"
import BlogCard from '../components/BlogCard';

export const UserBlogs = () => {

    const [blogs,setBlogs] = useState([]);

      //get user blogs
      const getUserBlogs =async () =>{
        try {
            const id = localStorage.getItem("userId");
            const {data}= await axios.get(`http://localhost:5000/api/v1/user/user-blog/${id}`);
            if(data?.success){
                setBlogs(data?.userBlog.blogs)
            }
        } catch (error) {
            console.log(error);
        }
      };
      useEffect(()=>{
        getUserBlogs();
      },[])
  return (
    <div>
    {blogs && blogs.length > 0 ? (
      blogs.map((blog) => (
        <BlogCard
          id={blog._id}
          isUser={true}
          title={blog.title}
          description={blog.description}
          image={blog.image}
          username={blog.user}
          time={blog.createdAt}
        />
      ))
    ) : (
      <h1>You Havent Created a blog</h1>
    )}
  </div>
);
}
