import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


const Detail = () => {
    const [product, setProduct] = useState({
        title:"banana",
        price:"adfasdfsad",
        description:"dsafasdfasdf"
    })
    const { id } = useParams();

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(
                res => {setProduct(res.data.product)
                console.log(res);
            })
            .catch(err=> console.error(err));
    }, [id]);

  return (
    <div>
        <h1>{product.title}</h1>
        <p>Price: {product.price}</p>
        <p>Description: {product.description}</p>
    </div>
  )
}

export default Detail