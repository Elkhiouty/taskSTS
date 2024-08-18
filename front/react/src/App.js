import './App.css';
import Cart from './Components/Cart/Cart';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar';
import Products from './Components/Products/Products';

import {
  Routes,
  Route
} from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
        <div className="main">
      <Routes>
          <Route path='/' element= {<Home />} />
          <Route path='/products' element= {<Products />} />
          <Route path='/cart' element= {<Cart />} />
      </Routes>
        </div>
    </>
  );
}

export default App;
