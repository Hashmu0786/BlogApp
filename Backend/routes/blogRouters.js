const express = require('express');
const { getAllBlogsController, createBlogController, updateBlogController, getBlogByIdController, deleteBlogControllers, userBlogControlller } = require('../controllers/blogControllers');

//router object
const router = express.Router();

//routes

//Get || all blogs
router.get('/all-blog',getAllBlogsController)

//Post || create Blog
router.post('/create-blog',createBlogController)

//Put || update blog
router.put('/update-blog/:id',updateBlogController)

//Get || String Blog Details
router.get('/get-blog/:id',getBlogByIdController)

//Delete || delete-blog
router.delete('/delete-blog/:id',deleteBlogControllers)

//user All-Blogs
router.get('/user-blog/:id',userBlogControlller);

module.exports =router
