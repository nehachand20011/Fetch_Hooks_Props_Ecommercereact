import React from 'react'
import{BrowserRouter, Route, Routes}from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import UseState from './hooks/UseState'
import Data from './props/Data'
import Display from './props/Display'
import Products from './hooks/Products'
import UseEffect from './hooks/useEffect'
import Fetch from './fetch/Fetch'
import ProductCart from './fetch/ProductCart'
import Navbarb from './bootstrap/Navbarb'
import Footerb from './bootstrap/Footerb'
import Carousel from './bootstrap/Carousel'
import Homeb from './bootstrap/Homeb'
import Productb from './bootstrap/productb'
import Mainb from './bootstrap/Mainb'
import Servicesb from './bootstrap/Servicesb'
import Contactb from './bootstrap/Contactb'
import Aboutb from './bootstrap/Aboutb'
import Signin from './bootstrap/Signin'
import Register from './bootstrap/Register'
import Cart from './bootstrap/Cart'
import NavbarRedux from './redux/NavbarRedux'




const MyRoutes = () => {
  return (
    <>
<BrowserRouter>
<Routes>
    <Route path='/nav'element={<Navbar/>}/>
    <Route path='/'element={<Home/>}/>
    <Route path='/about'element={<About/>}/>
    <Route path='/services'element={<Services/>}/>
    <Route path='/contact'element={<Contact/>}/>
    <Route path='/footer'element={<Footer/>}/>
    <Route path='/contact'element={<Contact/>}/>
    <Route path='/count'element={<UseState/>}/>
    <Route path='/data'element={<Data/>}/>
    <Route path='/display'element={<Display/>}/>
    <Route path='/product'element={<Products/>}/>
    <Route path='/useeffect'element={<UseEffect/>}/>
    <Route path='/fetch'element={<Fetch/>}/>
    <Route path='/fetch/:id'element={<ProductCart/>}/>
    <Route path='/navbar'element={<Navbarb/>}/>
    <Route path='/footerb'element={<Footerb/>}/>
    <Route path='/carousel'element={<Carousel/>}/>
    <Route path='/homeb'element={<Homeb/>}/>
    <Route path='/main'element={<Mainb/>}/>
    <Route path='/productb'element={<Productb/>}/>
    <Route path='/servicesb'element={<Servicesb/>}/>
    <Route path='/aboutb'element={<Aboutb/>}/>
    <Route path='/contactb'element={<Contactb/>}/>
    <Route path='/signin'element={<Signin/>}/>
    <Route path='/register'element={<Register/>}/>
    <Route path='/cart'element={<Cart/>}/>
    <Route path='/navbarredux'element={<NavbarRedux/>}/>






</Routes>
</BrowserRouter>

    </>
  )
}

export default MyRoutes