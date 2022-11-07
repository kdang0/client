import React from 'react';
import { Link } from 'react-router-dom';
const ProductList = (props) => {
    return(
        <div>
            {props.products.map((product, i) =>
                <div key={i}>
                    <h1><Link to={`/products/${product._id}`}>{product.title}</Link></h1>
                </div>
            )}
        </div>
    )
}

export default ProductList;