import './App.css';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'; 

import logo from "./assets/logo.png"

import Home from "./components/Home/index.js"
import Login from "./components/Login/index.js"
import SignUp from './components/SignUp';
import ProductGallery from './components/ProductGallery';
import Cart from './components/Cart';

import { useNavigate,Routes,Route } from 'react-router-dom';
import ProductDetails from './components/ProductDetails';
import { useState } from 'react';
import { Badge } from 'react-bootstrap';
import Checkout from './components/Checkout';
import cart from "./assets/cart.png"

function App() {
  const [cartItems,setCartItems] = useState({})
  const navigate = useNavigate()
  const userData = JSON.parse(localStorage.getItem("user"))
  let isLoggedin = false
  if(userData){
    isLoggedin = userData.isLoggedin
  }

  const handleCartItems = (item)=>{
    
    setCartItems({...cartItems,...item})
  }

  

  return (
    <div className="App">      
      
      <Navbar className="bg-body-tertiary">
        <Container className='nav-container'>
          <Navbar.Brand onClick={()=>navigate("/")} className='nav-logo-con'>
            <img src={logo} alt='logo' className='navbar-logo'/>
            InstaBuy!
            
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            {isLoggedin && <p className='username-text'>{userData.userName}</p>}
            <Button 
            style={{padding: "0.5rem 4rem",backgroundColor:'rgb(33,106,217)'}}
            onClick={()=>{
              if(isLoggedin){
                localStorage.setItem("user",JSON.stringify({...userData,isLoggedin:false}))
              }
              navigate("/login")}}>{isLoggedin ? 'Logout' : 'Login'}</Button>
              {userData && <Button onClick={()=>navigate("/cart")} style={{backgroundColor:"transparent",margin:"0 1rem",border:"2px solid rgb(33,106,217)"}}>
                <img src={cart} alt="cart-icon" className='cart-icon'/> &nbsp; { Object.keys(cartItems).length > 0 &&  <Badge bg='success'>{Object.keys(cartItems).length}</Badge>}</Button>}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path='/' element={<Home isLoggedin={isLoggedin}/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/products' element={<ProductGallery/>}></Route>
        <Route path='/products/:id' element={<ProductDetails handleCartItems={handleCartItems} cartItems={cartItems}/>}></Route>
        <Route path='/cart' element={<Cart cartItems={cartItems}/>}></Route>
        <Route path='/checkout' element={<Checkout/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
