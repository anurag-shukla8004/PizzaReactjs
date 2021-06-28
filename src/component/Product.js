import {useState, useEffect, useContext} from 'react';
import Sproduct from './Sproduct'
import {CartContext} from '../CartContext';

const Product = () => {

  // const {name} = useContext(CartContext);

const [products, setProducts]= useState([]);
useEffect(()=>{
fetch('https://raw.githubusercontent.com/codersgyan/ecommerce-rest-apis-node/main/database/products.json')
.then(response => response.json())
.then(products=>{
  setProducts(products)
})
},[]);

  return (
    <div className="container mx-auto pd-24">
      <h1 className="text-lg font-bold my-8">Products</h1>
      <div className="grid grid-cols-5 my-8 gap-24">
        
        {products.map(product=> <Sproduct key={product._id} product={product}/>)}
      </div>
    </div>
  )
}

export default Product
