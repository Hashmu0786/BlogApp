import React, { useState } from 'react'
import {Box, Button, TextField, Typography  } from "@mui/material";
import { useNavigate } from 'react-router-dom'; 
import axios from "axios"
import { useDispatch } from 'react-redux';
import { authActions } from '../redux/store';
import toast from "react-hot-toast";




export const LoginPage = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch()
   
  //state
  const [inputs,setInputs] = useState({
    email:'',
    password:''
  })
  
  //handle input change function
  const handleChange = (e) =>{
     setInputs(prevState => ({
      ...prevState,
      [e.target.name]:e.target.value
     }));   
  };

   // form handle
    const handleSubmit = async (e)=>{
       e.preventDefault();
       console.log(inputs);
       try {
       const {data} = await axios.post('http://localhost:5000/api/v1/user/login',
       {
        // name must be match with backend model Schema
        email:inputs.email,
        password:inputs.password
      })
            
       if(data.success){
        // console.log(data.user._id)
        localStorage.setItem("userId",data?.user._id);
        dispatch(authActions.login());
        toast.success("User login Successfully");
        navigate("/");
       }

       } catch (error) {
         console.log(error);
       }

    }
  return (
   <>
   <form onSubmit={handleSubmit}>
   <Box
    maxWidth={450}
    display="flex"
    flexDirection={"column"}
    alignItems={"center"}
    justifyContent={"center"}
    margin={"auto"}
    marginTop={5}
    boxShadow="10px 10px 20px #ccc"
    padding={3}
    borderRadius={5}
   >
    <Typography
     variant='h4'
     sx={{textTransform:"uppercase"}}
      padding={3}
       textAlign={"center"}
       >
       Login
        </Typography>

    <TextField 
    placeholder='Email'
    value={inputs.email}
    onChange={handleChange}
     name="email"
     margin="normal"
     type={"email"}
     required/>

    <TextField 
    placeholder='Password'
    value={inputs.password}
    onChange={handleChange}
     name="password"
     margin="normal"
     type={"password"}
     required/>
  
    <Button
    type='submit'
    sx={{borderRadius:3,marginTop:3}}
    variant='contained'
    color='primary'>
      
      Submit  </Button>
    <Button
    onClick={()=> navigate("/login")}
    sx={{borderRadius:3,marginTop:3}}>
      Not a user ? Please Register
      </Button>
   </Box>
   </form>
   </>
  )
  }
