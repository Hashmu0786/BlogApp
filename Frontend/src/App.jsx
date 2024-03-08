import './App.css'
import { Header } from './components/Header'
import {Routes,Route} from "react-router-dom"
import { Blogs } from './pages/Blogs'
import { Register } from './pages/Register'
import { LoginPage } from './pages/LoginPage'
import { UserBlogs } from './pages/UserBlogs'
import { CreateBlog } from './pages/CreateBlog'
import { Toaster } from 'react-hot-toast'
import BlogDetails from './pages/BlogDetails'
function App() {

  return (
    <>
          <Header/>
          <Toaster />
          <Routes>
          <Route path='/' element={<Blogs/>}/>
           <Route path='/blogs' element={<Blogs/>}/>
           <Route path='/my-blogs' element={<UserBlogs/>}/>
           <Route path="/blog-details/:id" element={<BlogDetails />} />
           <Route path='/create-blog' element={<CreateBlog/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path='/register' element={<Register/>}/>
      </Routes>
      
    </>
  )
}

export default App
