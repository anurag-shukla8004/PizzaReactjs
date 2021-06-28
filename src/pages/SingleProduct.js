import {useParams, useHistory} from 'react-router-dom';
import {useEffect, useState} from 'react';


const SingleProduct = () => {

  const [sproduct, setProduct]=useState({});
  const params = useParams();
  const history = useHistory()
 


  useEffect(()=>{
    fetch("https://raw.githubusercontent.com/codersgyan/ecommerce-rest-apis-node/main/database/products.json")
    .then(res => res.json())
    .then(sproduct=>{
      console.log(sproduct)
    })
  },[])

  return (
    <div className="container mx-auto mt-12">
    <button className="mb-12 font-bold" onClick={()=>{history.goBack()}}>Back</button>
    <div className="flex ">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAr5J25hbEsBpd37RRyR2Q1c2yoAO2HzrqQuHvWiT5qAeJHp4FTXwt-Oisjhb2y-92Ec8&usqp=CAU" alt="pizza"></img>
      <div className="ml-16">
        <h1 className="text-xl font-bold">Havanad pixxa</h1>
        <div className="text-md">small</div>
        <div className="font-bold mt-2">₹ 400</div>
        <button className="bg-yellow-500 py-1 px-8 rounded-full font-bold mt-4"> Add to cart</button>
      </div>
    </div>
    </div>
  )
}

export default SingleProduct;
