import './App.css'
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
import { Link, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
      <div className='py-6 flex justify-center flex-col items-center'>
        <h1 className='text-center text-xl font-semibold tracking-wider'>Ecommerce Shopping Cart</h1>
        <div className='flex gap-x-4'>
          <Link to={'cart'} className='underline my-3'>Go to Cart</Link>
          <Link to={'/'} className='underline my-3'>Go to home</Link>
        </div>
      </div>

      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
          <Route path='cart' element={<ShoppingCart />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
