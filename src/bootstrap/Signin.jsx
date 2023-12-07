import React from 'react'
import { Link } from 'react-router-dom'
import Navbarb from './Navbarb'
import Footerb from './Footerb'

const Signin = () => {
  return (
    <>
    <Navbarb/>
       
<main className="form-signin w-50 m-auto shadow-lg my-3 p-5 rounded-5">
    <form>
        <div className="text-center">
      <img className="mb-4" src="https://th.bing.com/th/id/R.a4133da816a7ce938c467bc782d822b3?rik=HFXoVigXYi9FwA&pid=ImgRaw&r=0" alt="" width="72" height="57"/>
    </div>
      <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
  
      <div className="form-floating">
        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
        <label for="floatingInput">Email address</label>
      </div>
      <div className="form-floating">
        <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
        <label for="floatingPassword">Password</label>
      </div>
  
      <div className="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me"/> Remember me
        </label>
      </div>
      <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
      do not have an account?
      <Link to="/register">register</Link>




      <p className="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
    </form>
  </main>
  <Footerb/>
    
    </>
  )
}

export default Signin