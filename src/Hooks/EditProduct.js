import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function useUpdateProduct() {
    const [categories, setCategories] = useState([]);
    const [Photos,setPhotos]=useState({})
    const navigate=useNavigate()
    const [effect,setEffect]=useState(false)
    const [product, setProduct] = useState({
        name: "",
        price: "",
        categoriId: "",
        description: "",
        photo: null, 
    });
   const[files,setFiles]=useState([])
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
     

    const { id } = useParams();
    console.log(id)
    useEffect(() => {
        fetch(`http://localhost:3333/prod/one/${id}`)
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                setProduct(res);
                setPhotos(res.Photos)
            });
    }, [id,effect]);

console.log(Photos)
    useEffect(() => {
        fetch("http://localhost:3333/category/get")
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                setCategories(res);
            });
    }, []);

 

    const updateProduct = async (id) => {
        const token = localStorage.getItem('token');
        const formData = new FormData();
        formData.append('name', product.name);
        formData.append('description', product.description);
        formData.append('price', product.price);
        formData.append('categoriId', product.categoriId);
        for (let i = 0; i < files.length; i++) {
            formData.append("photo", files[i]);
          }
        
        try {
          const response = await fetch(`http://localhost:3333/prod/update/${id}`, {
            method: 'PUT',
            body: formData,
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });
      
          if (response.ok) {
            setSnackbarOpen(true);
            setSnackbarMessage('Product updated');
            navigate(-1);
          } else {
            setSnackbarMessage('Error updating product');
          }
        } catch (error) {
          console.log(error);
        }
      };
      

    const handleDelete=async(id)=>{

        const token = localStorage.getItem('token');
               console.log(token);
               try {
                 const response = await fetch("http://localhost:3333/prod/deletePhoto",
                   {
                     method: "DELETE",
                     body: JSON.stringify({
                       id
                     }),
                     headers: {
                       "Content-type": "application/json; charset=UTF-8",
                       "Authorization":`Bearer ${token}`
                     },
                   }
                 );
                
                 const data = await response.json();
                 setEffect(!effect)
                 console.log(data);
                
               } catch (err) {
                 console.log(err);
               }
      
       }
    console.log(product);
    return {
        snackbarOpen,
        setSnackbarOpen,
        snackbarMessage,
        categories,
        updateProduct,
        setProduct,
        product,
        setFiles,
        files,
        Photos,
        handleDelete
      
    }
}