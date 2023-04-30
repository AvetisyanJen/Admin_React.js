import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Typography } from "@mui/material";
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import useUpdateProduct from "../../Hooks/EditProduct";



export default function UpdateProduct() {
  const {
    snackbarOpen,
    setSnackbarOpen,
    snackbarMessage,
    categories,
    updateProduct,
    setProduct,
    product
  } = useUpdateProduct()

  return (
    <div>
      <Typography
        component="h2"
        variant="h5"
        color="#333"
        sx={{ textAlign: "center", marginTop: "15px" }}
      >
        Edit Product
      </Typography>
      <Typography component='p' color="blue" sx={{ height: '10px', textAlign: 'center', fontSize: '15px' }}>

      </Typography>

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

        <Button variant="outlined"
          onClick={() => updateProduct(product.id)}
        >
          Update
        </Button>

        <Snackbar open={snackbarOpen}
        
          autoHideDuration={6000} onClose={() => setSnackbarOpen(false)}>
          <Alert onClose={() => setSnackbarOpen(false)} severity="success" sx={{ width: '100%' }}>
            {snackbarMessage}
          </Alert>
        </Snackbar>
      </Box>


    </div>
  );
}