import React from 'react'
import { useState } from 'react'

import arrowLeft from '../../assets/arrowLeft.svg'
import arrowRight from '../../assets/arrowRight.svg'

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0)
  const length = slides.length

  const nextSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  const prevSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  return (
    <div className="slider">
      {slides.map((picture, index) => {
        return (
          <div
            key={index}
            className={
              index === current
                ? 'slide slider_active-picture'
                : 'slide slider_inactive-picture'
            }
          >
            {index === current && (
              <img src={picture} alt="" className="slider_picture" />
            )}
          </div>
        )
      })}
      {length > 1 ? (
        <>
          <div className="slider_previous" onClick={prevSlide}>
            <img src={arrowLeft} alt="" className="slider_previous-icon" />
          </div>
          <div className="slider_next" onClick={nextSlide}>
            <img src={arrowRight} alt="" className="slider_next-icon" />
          </div>
        </>
      ) : null}
    </div>
  )
}

export default Slider
