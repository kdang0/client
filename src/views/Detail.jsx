import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';


const Detail = () => {
    const [product, setProduct] = useState({
        title:"banana",
        price:"adfasdfsad",
        description:"dsafasdfasdf"
    })
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(
                res => {setProduct(res.data.product)
                console.log(res);
            })
            .catch(err=> console.error(err));
    }, [id]);
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/delete/'+ productId)
            .then(res => {
                navigate("/");
            })
            .catch(err => console.error(err));
    }
  return (
    <div>
        <h1>{product.title}</h1>
        <p>Price: {product.price}</p>
        <p>Description: {product.description}</p>
        <Link to={`/products/update/${product._id}`}> Edit </Link>
        <button onClick={e=>{deleteProduct(product._id)}}>Delete</button>
    </div>
  )
}

export default Detail