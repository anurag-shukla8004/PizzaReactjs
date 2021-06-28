import {Link} from 'react-router-dom'
import {useContext} from 'react';
import {CartContext} from '../CartContext';

const Navigation = () => {
  const cartStyle = {
    background: '#F59E0D',
    display: 'flex',
    padding: '6px 12px',
    borderRadius: '50px'
  }

  const {cart} = useContext(CartContext);
  return (
    <>
      <nav className="container mx-auto flex items-center justify-between py-4">
         <Link to="/">
          <img style={{height:45}} src="https://raw.githubusercontent.com/codersgyan/react-shopping-cart/main/public/images/logo.png" alt="logo"/>
         </Link>


         <ul className="flex items-center">
           <li><Link to="/">Home</Link></li>
           <li className="ml-6"><Link to="/product">Products</Link></li>
           <li className="ml-6"><Link to="">
             <div style={cartStyle}>
               <span>{cart.totalItems}</span>
               <img className="ml-2" src="https://raw.githubusercontent.com/codersgyan/react-shopping-cart/main/public/images/cart.png" alt="cart-icon"/>
             </div>
             </Link></li>
         </ul>
      </nav>
    </>
  )
}

export default Navigation
