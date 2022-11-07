import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import ProductForm from '../components/ProductForm'
import ProductList from '../components/ProductList';
const Main = () => {
    const[products,setProducts] = useState([])
    const [loaded, setLoaded] = useState(false);

    useEffect(() =>{
        axios.get('http://localhost:8000/api/products')
            .then(res=>{
                setProducts(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    }, []);
  return (
    <div>
        <ProductForm/>
        <hr/>
        {loaded && <ProductList products={products}/>}
    </div>
  )
}

export default Main