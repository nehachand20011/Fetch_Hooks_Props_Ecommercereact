import React from 'react'
import { Link } from 'react-router-dom'
import "./mystyle.css"

const Navbarb = () => {
  return (
    <>



    
        <div className="container-fluid">
<div className="row custom-navbar">
<div className="col-md-3 text-center pt-1">
    <Link className="navbar-brand fs-3 fw-bold text-success" to="/navbar">NEHASHOPE</Link>
    </div>

<div className="col-md-6 p-1">
    <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-success" type="submit">Search</button>
      </form>
</div>
<div className="col-2 d-flex justify-content-evenly ">
    <Link to="/signin" className="text-success fs-2"><i className="bi bi-box-arrow-in-right"></i></Link>
    <Link to="/register" className="text-success fs-2"><i className="bi bi-person-plus"></i></Link>
    <Link to="/cart" className="text-success fs-2"><i className="bi bi-cart-check-fill"></i></Link>
</div>
</div>
</div>
    
    
    <nav className="navbar navbar-expand-lg custom-navbar">
        <div className="container-fluid">
          
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
              <Link className="nav-link " to="/homeb">Home</Link>
               
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/productb">Product</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/servicesb">Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/aboutb">About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contactb">Contact</Link>
              </li>
              
              
              
              
              
              
              </ul>  
            
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbarb