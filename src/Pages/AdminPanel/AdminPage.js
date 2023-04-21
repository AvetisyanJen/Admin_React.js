import { Link, Outlet, useNavigate } from "react-router-dom" 
import { MenuItem, MenuList, Box, Button } from "@mui/material";


function AdminPage() {
/////menyu admin
  const navigate = useNavigate();

  function logOut(){
    localStorage.removeItem('token');
    navigate('/');
  }
  return (
    <>
      <Box
        sx={{
          display: "flex",
          width: 220,
          height: "91vh",
          maxWidth: "100%",
          boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
          borderRadius: "none",
          backgroundColor:"black"
        }}
      >
        <MenuList
          sx={{ display: "flex", flexDirection: "column", gap: "20px", color:"white",marginRight:50}}
        >
          <MenuItem sx={{ marginTop: "15px" }}>Dashboard</MenuItem>
        <Link to="/addCtegory">
    <MenuItem sx={{color: "white", textDecoration: "none"  }}>AddCategory</MenuItem>
         
          </Link>
          <Link to="products">
            <MenuItem sx={{color: "white", textDecoration: "none"  }}>Products</MenuItem>
          </Link>
          <Link to="categories">
            <MenuItem sx={{color: "white", textDecoration: "none"  }}>Categories</MenuItem>
          </Link>
          <Link to="users">
            <MenuItem sx={{color: "white", textDecoration: "none"  }}>Users</MenuItem>
          </Link>
          <Button color="inherit" onClick={logOut}>LogOut</Button>
        </MenuList>
        <Outlet/>
      </Box>
    </>
  );
}

export default AdminPage;