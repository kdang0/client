import React, {useState} from 'react'
import axios from 'axios';

const ProductForm = () => {
  const [product, setProduct] = useState({
    title: "",
    price: "",
    description: ""
  });

  const handleSubmit = e => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/products/new', {
      title: product["title"],
      price: product["price"],
      description: product["description"]
    })
      .then(res => console.log("Response: ", res))
      .catch(err => console.log("Error: ", err))
  }
  return (
    <form onSubmit = { handleSubmit }>
      <p>
        <label>Title: </label>
        <input type="text" onChange={e=>setProduct({...product, title:e.target.value})}/>
      </p>

      <p>
        <label>Price: </label>
        <input type="text" onChange={e=>setProduct({...product, price:e.target.value})}/>
      </p>

      <p>
        <label>Description: </label>
        <input type="text" onChange={e=>setProduct({...product, description:e.target.value})}/>
      </p>

      <button type="submit">Create</button>
    </form>
  )
}

export default ProductForm