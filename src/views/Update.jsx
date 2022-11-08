import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
const Update = () => {
    const {id} = useParams();
    const [product, setProduct] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => setProduct(res.data.product))
            .catch(err => console.error(err))
    }, [id]);


    const updateProduct = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/products/update/' + id,{
            title: product["title"],
            description: product["description"],
            price: product["price"]
        })
            .then(navigate("/"))
            .catch(err => console.log(err));
    }
  return (
    <form onSubmit ={updateProduct}>
        <p>
            <label>Title: </label><br/>
            <input type="text" 
            name="title" 
            value={product.title}
            onChange= {e=> { setProduct({...product, title: e.target.value})}}
            />
        </p>
        <p>
            <label>Price: </label><br/>
            <input type="text" 
            name="price" 
            value={product.price}
            onChange= {e=> { setProduct({...product, price: e.target.value})}}
            />
        </p>
        <p>
            <label>Description: </label><br/>
            <input type="text" 
            name="description" 
            value={product.description}
            onChange= {e=> { setProduct({...product, description: e.target.value})}}
            />
        </p>
        <button type="submit">Update</button>
    </form>
  )
}

export default Update