import Product from '../component/Product'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <>
    <div className="hero py-16">
      <div className="container mx-auto flex items-center justify-between">
          <div className="w-1/2">
           <h1 className="text-lg"> <em>Are you hungary?</em></h1>
           <h1 className="text-3xl md:text-3xl font-bold"> Don't wait !</h1>
          <button className="btn px-6 py-2 rounded-full text-white font-bold mt-4 bg-yellow-500 hover:bg-yellow-600"><Link to="/button">Order Now </Link></button>
            </div>

            {/* Image */}
          <div className="w-1/2">
              <img className="w-4/5" src="https://raw.githubusercontent.com/codersgyan/react-shopping-cart/main/public/images/pizza.png" alt="pizza"/>
          </div>
      </div>
    </div>


    <div className="pb-24">
         <Product/>
    </div>
    </>
  )
}

export default Home
