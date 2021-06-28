import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages/Home'
// import About from './pages/About'
import Navigation from './component/Navigation'
import Productpage from './pages/Productpage'
import Cart from './pages/Cart'
import Button from './pages/Productpage'
import SingleProduct from './pages/SingleProduct';
import { CartContext } from './CartContext'
import {useEffect , useState} from 'react';

const App = () => {

   const [cart, setCart] = useState({});

   useEffect(() => {
   const cart = window.localStorage.getItem('cart');
   setCart(JSON.parse(cart));
   }, []);

   useEffect(() => {
    window.localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);


  return(
    <>
    <Router>
      <CartContext.Provider value={{cart, setCart}}>
      <Navigation />
      <Switch>
          <Route path="/" component={Home} exact></Route>
          {/* <Route path="/about" component={About} ></Route> */}
          <Route path="/product" exact component={Productpage}></Route>
          <Route path="/product" component={SingleProduct}></Route>
          <Route path="/button" component={Button}></Route>
          <Route path="/cart" component={Cart}></Route>
       </Switch>
       </CartContext.Provider>
    </Router>
    </>
  )
}

export default App;