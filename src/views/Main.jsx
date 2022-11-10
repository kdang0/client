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


    const createProduct = product => {
      axios.post('http://localhost:8000/api/products/new', product)
          .then(res => {
            setProducts([...products, res.data.product]);
          })
    }

    const removeFromDom = productId => {
      setProducts(products.filter(product => product._id !== productId))
    }
  return (
    <div>
        <ProductForm initialTitle="" initialPrice="" initialDescription="" onSubmitProp={createProduct}/>
        <hr/>
        {loaded && <ProductList products={products} removeFromDom={removeFromDom}/>}
    </div>
  )
}

export default Main