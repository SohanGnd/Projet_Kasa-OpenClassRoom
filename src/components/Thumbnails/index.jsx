import React from 'react'

const Thumbnails = ({ image, title }) => {
  return (
    <div className="home_products_container">
      <img src={image} alt="" className="home_products_img" />
      <div className="home_products_overlay"></div>
      <h2 className="home_products_title">{title}</h2>
    </div>
  )
}

export default Thumbnails
