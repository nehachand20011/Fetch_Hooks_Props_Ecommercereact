import React from 'react'
import Footerb from './Footerb'
import Navbarb from './Navbarb'

const Cart = () => {
  return (
    <>
    <Navbarb/>
  
    <div className="container-fluid text-center">
      <h3 className="text-center mt-3 text-success">Cart Item</h3>
      <table className="table w-75 m-auto my-3 table-bordered text-center table-hover align-middle">
        <thead className="table-dark-black">
          <tr>
            <th>S.no</th>
            <th>Product Name</th>
            <th>Product Image</th>
            {/* <th>Product information</th> */}
            <th>Quantity</th>
            <th>Total Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>
              <h4>Apple iPad</h4>
            </td>
            <td className="overflow-hidden">
              <img src="https://th.bing.com/th/id/R.1d8c0d5971df0ce1dc0fe8b1441d5466?rik=0YfTvD9HbEpC0w&riu=http%3a%2f%2fuiconstock.com%2fwp-content%2fuploads%2f2016%2f11%2fFree-Apple-iPad-Mock-up-For-Graphic-Web-Designers-2017.jpg&ehk=w8n%2blnJZ1h%2f0jjbx72kqNjuelZVympF9BPXfLRKAL00%3d&risl=&pid=ImgRaw&r=0" alt="" className="card-img-top" />
            </td>
            <td className="overflow-hidden">
              <h4>5</h4>
            </td>
            <td className="overflow-hidden">
              <h4>100000</h4>
            </td>
            <td>
              <div className="btn-group">
                <button className="btn btn-warning" onClick={() => window.confirm('Are you sure you want to update this product')}>
                  <i className="bi bi-pencil"></i>
                  Update
                </button>
                <button className="btn btn-danger" onClick={() => window.confirm('Are you sure you want to delete this product')}>
                  <i className="bi bi-trash"></i>
                  Delete
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>
              <h4>Hp Laptop</h4>
            </td>
            <td className="overflow-hidden">
              <img src="https://th.bing.com/th/id/R.011ec1c7f249e522bcf8262224aa666b?rik=bnm7BmcnpLZvlg&riu=http%3a%2f%2fmspoweruser.com%2fwp-content%2fuploads%2f2016%2f08%2fMicromax-Alpha-Laptop-3.jpg&ehk=ELNqBrOi34RVfpeOX%2bn81Vd7%2fHKyMgSSX3D6DB4WPBg%3d&risl=&pid=ImgRaw&r=0" alt="" className="card-img-top" />
            </td>
            <td className="overflow-hidden">
              <h4>6</h4>
            </td>
            <td>
              <h5>Rs.800</h5>
            </td>
            <td>
              <div className="btn-group">
                <button className="btn btn-warning" onClick={() => window.confirm('Are you sure you want to buy this product')}>
                  <i className="bi bi-pencil"></i>
                  Buy
                </button>
                <button className="btn btn-danger" onClick={() => window.confirm('Are you sure you want to delete this product')}>
                  <i className="bi bi-trash"></i>
                  Delete
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>
              <h4>Headphones Wireless</h4>
            </td>
            <td className="overflow-hidden">
              <img src="https://i5.walmartimages.com/asr/5ea7aea3-3539-4de1-942b-f2fdd6db9666.c69527a264bd4c821842dbce8f513178.jpeg" alt="" className="card-img-top" />
            </td>
            <td className="overflow-hidden">
              <h4>7</h4>
            </td>
            <td>
              <h5>Rs.1200</h5>
            </td>
            <td>
              <div className="btn-group">
                <button className="btn btn-warning" onClick={() => window.confirm('Are you sure you want to buy this product')}>
                  <i className="bi bi-pencil"></i>
                  Buy
                </button>
                <button className="btn btn-danger" onClick={() => window.confirm('Are you sure you want to delete this product')}>
                  <i className="bi bi-trash"></i>
                  Delete
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>



<Footerb/>
    </>
  )
}

export default Cart