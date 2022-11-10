import React, {useState, useEffect} from 'react';



const ProductForm = (props) => {
  const { initialTitle, initialPrice, initialDescription, onSubmitProp } = props
  let curTitle = initialTitle;
  const [product, setProduct] = useState({
    title: curTitle,
    price: initialPrice,
    description: initialDescription
  });

  useEffect(() => { 
    setProduct(
      {
        title: curTitle,
        price: initialPrice,
        description: initialDescription
      }
    )}, [])
  
  const [title, setTitle] = useState(initialTitle);
  console.log(title);
  console.log(initialTitle);
  // console.log(curTitle);
  const handleSubmit = e => {
    console.log(product.price)
    e.preventDefault();
    // axios.post('http://localhost:8000/api/products/new', {
    //   title: product["title"],
    //   price: product["price"],
    //   description: product["description"]
    // })
      // .then(addProduct(product))
      // .catch(err => console.log("Error: ", err))
    onSubmitProp(product);
  }
  return (
    <form onSubmit = { handleSubmit }>
      {/* title: {initialTitle}
      price: {product.price}
      description: {product.description} */}
      <p>
        <label>Title: </label>
        <input value={product.title} type="text" onChange={e=>setProduct({...product, title:e.target.value})}/>
      </p>

      <p>
        <label>Price: </label>
        <input value={product.price} type="text" onChange={e=>setProduct({...product, price:e.target.value})}/>
      </p>

      <p>
        <label>Description: </label>
        <input value={product.description} type="text" onChange={e=>setProduct({...product, description:e.target.value})}/>
      </p>

      <button type="submit">Create</button>
    </form>
  )
}

export default ProductForm