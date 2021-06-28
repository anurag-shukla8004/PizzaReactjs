
import {Link} from 'react-router-dom';
import {useContext, useState} from 'react';
import {CartContext} from '../CartContext';

const Sproduct = (props) => {
 const [isAdding, setIsAdding] = useState(false);
  const {cart,setCart} = useContext(CartContext);
  const { product } = props;

  const addToCart = (event, product)=>{
    event.preventDefault();
    let _cart ={...cart};

    if(!_cart.items){
      _cart.items={}
    }

    if(!_cart.items[product.name]){
      _cart.items[product.name] = _cart.items[product.name]+1;
    }else{
      _cart.items[product.name]=1;
    }

    if(!_cart.totalItems){
      _cart.totalItems=0;
    }
       
    _cart.totalItems += 1;

    setCart(_cart);
    setIsAdding(true);

    setTimeout(() => {
      setIsAdding(false);
    }, 1000);

    
    
  }

  return (
   <Link to={`/product/${product.name}`}>
    <div>
       <div>
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAr5J25hbEsBpd37RRyR2Q1c2yoAO2HzrqQuHvWiT5qAeJHp4FTXwt-Oisjhb2y-92Ec8&usqp=CAU" alt="pizza"/>
           <div className="text-center">

           <h2 className="text-lg font-bold py-2">{product.name}</h2>
           <span className="bg-gray-200 py-1 rounded-full text-sm px-4">{props.product.size}</span>

           </div>
           <div className="flex justify-between items-center mt-4">
             <span>₹{product.price}</span>
             <button disabled={isAdding} onClick={(e) => { addToCart(e, product) }} className={`${ isAdding ? 'bg-green-500': 'bg-yellow-500' } py-1 px-4 rounded-full font-bold`}>ADD{isAdding ? 'ED': ''}</button>
           </div>
         </div>
    </div>
   </Link>
  )
}

export default Sproduct;
