import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Box, Button, Toolbar, Typography, ThemeProvider, Tabs, Tab } from "@mui/material";
import { createTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { authActions } from '../redux/store';
import toast from "react-hot-toast";


const theme = createTheme(); // Create a theme instance

export const Header = () => {
  //global state
  let isLogin = useSelector((state)=> state.isLogin);
    isLogin = isLogin || localStorage.getItem("userId");
  const dispatch =useDispatch();
  // console.log(isLogin);
   const navigate = useNavigate();
  //state
  const [value,setValue] = useState();

  const handleLogout = ()=>{  
    try {
      dispatch(authActions.logout());
      toast.success("Logout Successfully");
      navigate('/login');  
      localStorage.clear();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant='h4'>
            My Blog App
          </Typography>
          {isLogin && (
          <Box display={"flex"} marginLeft={"auto"}>
         <Tabs textColor="inherit" value={value} onChange={(e,val)=> setValue(val)}>
                 <Tab label="Blogs" LinkComponent={Link} to="/blogs" />
                <Tab label="My Blogs" LinkComponent={Link} to="/my-blogs" />
                <Tab label="Create Blog" LinkComponent={Link} to="/create-blog" />

      </Tabs>

        </Box>
        )}
          <Box display={"flex"} marginLeft="auto">
            {!isLogin && (
              <>
            <Button sx={{ margin: 1, color: "white" }} 
             LinkComponent={Link} to ="/login"
            >Login</Button>
            <Button sx={{ margin: 1, color: "white" }}
            LinkComponent={Link} to ="/register"
            >Register</Button>
            </>
            )}
            {isLogin && (
            <Button 
             onClick={handleLogout}
            sx={{ margin: 1, color: "white" }}>Logout</Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};
