import React from 'react'

const Carousel = () => {
  return (
    <>
 <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators"
       data-bs-slide-to="0"  aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" 
      data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" 
      data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner custom-carousel">
      <div className="carousel-item active custom-images">
      {/* <img src="https://th.bing.com/th/id/OIP.4pTqzdDvs4PW4FF6aV-9RAAAAA?pid=ImgDet&w=297&h=200&rs=1" className="d-block w-100 custom-image" alt="..."/> */}
        <img src="https://th.bing.com/th/id/R.21ed17bce82219122a2220497fb4dda7?rik=SXlnvn53lRgygA&pid=ImgRaw&r=0" className="d-block w-100 custom-image" alt="..."/>
      </div>
      <div className="carousel-item custom-images">
        <img src="https://images.static-bluray.com/products/22/198316_1_large.jpg" className="d-block w-100 custom-image" alt="..."/>
      </div>
      <div className="carousel-item custom-images">
        <img src="https://th.bing.com/th/id/OIP.4pTqzdDvs4PW4FF6aV-9RAAAAA?pid=ImgDet&w=297&h=200&rs=1" className="d-block w-100 custom-image" alt="..."/>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
    </>
  )
}

export default Carousel