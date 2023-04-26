import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useDelet from "../../Hooks/DeletProduct";

function Products() {
  const {products,deleteProduct}=useDelet()
  return (
    <div>
      <Container sx={{ display: "flex", flexDirection: "column" }}>
        <Stack
          sx={{
            display: "flex",
            justifyContent: "end",
            alignItems: "end",
            marginTop: "20px",
          }}
        >
          <Button variant="contained">
            <Link to="addProduct">New Product</Link>
          </Button>
        </Stack>
        <TableContainer
          component={Paper}
          sx={{ width: "100%", margin: "50px auto" }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Image</TableCell>
                <TableCell align="center">Price</TableCell>
                <TableCell align="center">Description</TableCell>
                <TableCell align="center">Category</TableCell>

              </TableRow>
            </TableHead>
            <TableBody>
              {products?.map((product) => (
                <TableRow
                  key={product.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center">{product.name}</TableCell>
                  <TableCell align="center">
                    <img  width="80px" />
                  </TableCell>
                  <TableCell align="center">{product.price}</TableCell>
                  <TableCell align="center">{product.description}</TableCell>
                   <TableCell align="center">{product.Category ? product.Category.name : ''}</TableCell> 

                  <TableCell align="center">
                    <Link to={`editProduct/${product.id}`}>
                      <EditIcon />
                    </Link>
                    <DeleteOutlineIcon onClick={()=>deleteProduct(product.id)} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </div>
  );
}

export default Products;

// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import EditIcon from "@mui/icons-material/Edit";
// import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
// import Container from "@mui/material/Container";
// import Stack from "@mui/material/Stack";
// import Button from "@mui/material/Button";
// import { useEffect, useState } from "react";
// import { Link, Outlet, useNavigate } from "react-router-dom";
// import useDelet from "../../Hooks/DeletProduct";
// import { TextField } from "@mui/material";
// function Products() {
//   const [active, setActive] = useState(true);
//   const [activeProductId, setActiveProductId] = useState(null);
//   const [text, setText] = useState(null)
//   // const {products, deleteProduct, editProduct} = useProduct()
//   const [editingProductId, setEditingProductId] = useState(null);
//   const { products, deleteProduct } = useDelet()
//   const [edit, setEdit] = useState({
//     name: "",
//     description: "",
//     price: "",
//     categoriId: ""
//   })

//   console.log(products+"DDdddd");





//   return (
//     <div>
//       <Container sx={{ display: "flex", flexDirection: "column" }}>
//         <Stack
//           sx={{
//             display: "flex",
//             justifyContent: "end",
//             alignItems: "end",
//             marginTop: "20px",
//           }}
//         >
//           <Button variant="contained">
//             <Link to="addProduct">New Product</Link>
//           </Button>
//         </Stack>
//         <TableContainer
//           component={Paper}
//           sx={{ width: "100%", margin: "50px auto" }}
//         >
//           <Table sx={{ minWidth: 650 }} aria-label="simple table">
//             <TableHead>
//               <TableRow>
//                 <TableCell align="center">Name</TableCell>
//                 <TableCell align="center">Image</TableCell>
//                 <TableCell align="center">Price</TableCell>
//                 <TableCell align="center">Description</TableCell>
//                 <TableCell align="center">Category</TableCell>
//                 <TableCell align="center">Actions</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {products.map((product) => (
//                 <TableRow
//                   key={product.id}
//                   sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
//                 >
//                   <TableCell>
//                     <TextField
//                       defaultValue={product.name}
//                       onChange={(e) => setEdit({ ...edit, name: e.target.value })}
//                       InputProps={{
//                         readOnly: active
//                       }}
//                       helperText={
//                         editingProductId === product.id ? 'Edit field' : null
//                       }
//                       onFocus={() => setEditingProductId(product.id)}
//                       onBlur={() => setEditingProductId(null)}
//                   />
//                   </TableCell>
//                   {/* <TableCell align="center">
//                     <img width="80px" src={product.image} />
//                   </TableCell> */}
//                   <TableCell align="center">
//                     <TextField
//                       defaultValue={product.price}
//                       onChange={(e) => setEdit({ ...edit, price: e.target.value })}
                   
//                       id="product-price"
//                       InputProps={{
//                         readOnly: active
//                       }}
//                       helperText={
//                         editingProductId === product.id ? 'Edit field' : null
//                       }
//                       onFocus={() => setEditingProductId(product.id)}
//                       onBlur={() => setEditingProductId(null)}
//                     />


//                   </TableCell>
//                   <TableCell align="center">
//                     <TextField
//                       defaultValue={product.description}
//                       onChange={(e) => setEdit({ ...edit, description: e.target.value })}
            
//                       id="product-description"
//                       InputProps={{
//                         readOnly: active
//                       }}
//                       helperText={
//                         editingProductId === product.id ? 'Edit field' : null
//                       }
//                       onFocus={() => setEditingProductId(product.id)}
//                       onBlur={() => setEditingProductId(null)}
//                     />


//                   </TableCell>
//                   <TableCell align="center">
//                     <TextField
//                       defaultValue={product.Category ? product.Category.name : ''}
//                       // onChange={(e) => setEdit({ ...edit, categoriId: e.target.value })}
                     
//                       id="product-category"
//                       // InputProps={{
//                       //   readOnly: active
//                       // }}
//                       // helperText={
//                       //   editingProductId === product.id ? 'Edit field' : null
//                       // }
//                       // onFocus={() => setEditingProductId(product.id)}
//                       // onBlur={() => setEditingProductId(null)}
                     
//                     />


//                   </TableCell>
//                   <TableCell align="center">
//                     <Stack direction="row" spacing={2}>
//                       {activeProductId === product.id ? (
//                         <Button
//                           onClick={() => {
                     
//                             setActiveProductId(null);
                           
//                           }}
//                         >
//                           save
//                         </Button>
//                       ) : (
//                         <Button
//                           onClick={() => {
                      
//                             setActive(!active)
//                             setActiveProductId(product.id);
//                           }}

//                           sx={{ cursor: "pointer" }}
//                         >
//                           edit
//                         </Button>
//                       )}
//                       <DeleteOutlineIcon
//                         onClick={() => deleteProduct(product.id)}
//                         sx={{ cursor: "pointer" }}
//                       />
//                     </Stack>
//                   </TableCell>
//                 </TableRow>
//               ))}

//             </TableBody>
//           </Table>
//         </TableContainer>
//       </Container>
//     </div>
//   );
// }

// export default Products;