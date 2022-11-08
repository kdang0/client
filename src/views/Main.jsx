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
                console.log('hi')
                setProducts(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    }, [products.length]);


    const addList = product => {
      setProducts([...products, product]);
    }

    const removeFromDom = productId => {
      setProducts(products.filter(product => product._id !== productId))
    }
  return (
    <div>
        <ProductForm addProduct = {addList}/>
        <hr/>
        {loaded && <ProductList products={products} removeFromDom={removeFromDom}/>}
    </div>
  )
}

export default Main