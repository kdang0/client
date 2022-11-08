import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
const ProductList = (props) => {
    const { removeFromDom } = props;
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/delete/'+ productId)
            .then(res => {
                removeFromDom(productId)
            })
            .catch(err => console.error(err));
    }

    return(
        <div>
            {props.products.map((product, i) =>
                <div key={i}>
                    <h1><Link to={`/products/${product._id}`}>{product.title}</Link></h1> 
                    <button onClick={e=>{deleteProduct(product._id)}}>Delete</button>
                </div>
            )}
        </div>
    )
}

export default ProductList;