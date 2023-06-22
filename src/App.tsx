import './App.css'
import Home from './pages/Home'
import Products from './pages/Products'
import Checkout from './pages/Checkout'
import { HashRouter, Route, Routes } from 'react-router-dom'


function App() {
  return (
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product" element={<Products/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
      </Routes>
  )
}

function WrappedApp(){
  return(
    <HashRouter>
      <App />
    </HashRouter>
  )
}

export default WrappedApp
