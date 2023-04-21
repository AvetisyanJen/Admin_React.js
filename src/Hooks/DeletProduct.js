
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function useDelet() {

  const [products, setProducts] = useState([]);
  const [reference, setReference] = useState(false);
  const navigate=useNavigate()
  useEffect(() => {
    fetch("http://localhost:5000/prod")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setProducts(res);
      });
  }, [reference]);

    const deleteProduct = async (id) => {
        const token = localStorage.getItem('token');
          console.log(token);
          try {
            const response = await fetch(
              "http://localhost:5000/prod/delete",
              {
                method: "DELETE",
                body: JSON.stringify({
                  id,
                }),
                headers: {
                  "Content-type": "application/json; charset=UTF-8",
                  "Authorization":`Bearer ${token}`
                },
              }
            );
            if(response.status === 401 || response.status === 403){
              console.log(response.status);
              navigate('/');
            }
            const data = await response.json();
            console.log(data);
            setReference(true);
          } catch (err) {
            console.log(err);
          }
    };

  return {deleteProduct, products}

}