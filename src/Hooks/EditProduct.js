import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function useUpdateProduct() {
    const [categories, setCategories] = useState([]);
    const navigate=useNavigate()
    const [product, setProduct] = useState({
        name: "",
        price: "",
        categoriId: "",
        description: ""
    });

    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');

    const { id } = useParams();
    console.log(id)
    useEffect(() => {
        fetch(`http://localhost:5000/prod/${id}`)
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                setProduct(res);
            });
    }, [id]);


    useEffect(() => {
        fetch("http://localhost:5000/cat/categories")
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                setCategories(res);
            });
    }, []);

    const updateProduct = async (id) => {
        const token = localStorage.getItem("token");
        try {
            const response = await fetch(
                `http://localhost:5000/prod/update/${id}`,
                {
                    method: "PUT",
                    body: JSON.stringify(product),
                    headers: {
                        "Content-type": "application/json; charset=UTF-8",
                        "Authorization": `Bearer ${token}`
                    },
                }
            );

            if (response.ok) {
                setSnackbarOpen(true)
                setSnackbarMessage("Product Updated")
                navigate(-1)
            } else {
                setSnackbarMessage("krkin porceq")
            }
        } catch (err) {
            console.log(err);
        }
    };

    console.log(product);
    return {
        snackbarOpen,
        setSnackbarOpen,
        snackbarMessage,
        categories,
        updateProduct,
        setProduct,
        product
    }
}