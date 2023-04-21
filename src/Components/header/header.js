import {Link, Outlet} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
// import './header.css'
// // import { useContext } from "react";
// // import { mycontext } from "../../Provider/myContext";
// export default function Header() {
//   // const { formData, setFormData} = useContext(mycontext) 
//   return (
//     <>
    
//     <div className='login-div'>
//     <h1>Store</h1>
//     <div>
//      <div><Link to="register"><h3 className='signUp'>Sign up</h3> </Link> 
//           <Link to="login">
//     <h3 className='signIn'>Login</h3></Link></div>
 
    
//        </div>
//     </div>
//     <Outlet/>
//     </>
//   )

// }
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


export default function Header() {
  const navigate=useNavigate()
  const user = localStorage.getItem("token")
  function logOut(){
    localStorage.removeItem('token');
    navigate('/');
  }
  return (<>

    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "purple"}} >
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
           
          </IconButton> */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Store
          </Typography> <Link to="login">
          {user?(<Button onClick={logOut} sx={{ backgroundColor: "white",color:"black"}}>LogOut</Button>):
            (<Button sx={{ backgroundColor: "white",color:"black"}}>Login</Button>)}
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
    <Outlet/>
    </> );
}