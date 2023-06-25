import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Grid, IconButton, Typography } from "@mui/material";
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import useUpdateProduct from "../../Hooks/EditProduct";
import { Input } from "@mui/icons-material";
import DeleteIcon from '@mui/icons-material/Delete';


export default function UpdateProduct() {
  const {
    snackbarOpen,
    setSnackbarOpen,
    snackbarMessage,
    categories,
    updateProduct,
    setProduct,
    product,
    setFiles,
    Photos,
    handleDelete
  
   
  } = useUpdateProduct()




  return (
<div style={{ display: "flex",
      justifyContent: "center",
      alignItems: "center", 
      flexDirection:"column"}}>
  

  <Box
    component="form"
    sx={{
      "& > :not(style)": { m: 1, width: "41ch" },
      marginTop: "20px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    }}
    noValidate
    autoComplete="off"
  >
    <TextField
      id="outlined-helperText"
      label="Name"
      value={product.name}
      onChange={(e) =>
        setProduct({ ...product, name: e.target.value })
      }
    />

    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">
        Category
      </InputLabel>
      <Select
        labelId="categoriId"
        id="category"
        value={product.categoriId}
        label="Category"
        onChange={(e) =>
          setProduct({ ...product, categoriId: e.target.value })
        }
      >
        {categories.map((category) => (
          <MenuItem value={category.id} key={category.id}>
            {category.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>

    <TextField
      id="price"
      label="Price"
      variant="outlined"
      value={product.price}
      onChange={(e) =>
        setProduct({ ...product, price: e.target.value })
      }
    />

    <TextField
      id="description"
      label="Description"
      variant="outlined"
      value={product.description}
      onChange={(e) =>
        setProduct({ ...product, description: e.target.value })
      }
    />

<input
  accept="image/*"
  id="photo"
  multiple
  type="file"
  onChange={(e) => {
    setFiles(e.target.files);
  }}
/>

    <Button variant="outlined" onClick={() => updateProduct(product.id)}>
      Update
    </Button>


    <Snackbar
      open={snackbarOpen}
      autoHideDuration={6000}
      onClose={() => setSnackbarOpen(false)}
    >
      <Alert
        onClose={() => setSnackbarOpen(false)}
        severity="success"
        sx={{ width: "100%" }}
      >
        {snackbarMessage}
      </Alert>
    </Snackbar>
  </Box>


  <Grid container spacing={2} >
    {Array.isArray(Photos) && Photos.map((element, index) => (
      <Grid item key={index}>
        <div style={{ position: "relative" }}>
          <img src={"http://localhost:3333/images/" + element?.url} width="150px" height="150px" />
          <IconButton
            style={{ position: "absolute", top: 0, right: 0 }}
             onClick={() => handleDelete(element.id)}
          >
            <DeleteIcon />
          </IconButton>
        </div>
      </Grid>
    ))}
  </Grid>

</div>

  );
}