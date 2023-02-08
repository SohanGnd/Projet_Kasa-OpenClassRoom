import React from 'react'
import image from '../../assets/banner.png'

function Herobanner() {
  return (
    <div className="home_banner">
      <img src={image} alt="" className="home_banner_img" />
      <div className="home_banner_overlay"></div>
      <h2 className="home_banner_title">Chez vous, partout et ailleurs</h2>
    </div>
  )
}

export default Herobanner
