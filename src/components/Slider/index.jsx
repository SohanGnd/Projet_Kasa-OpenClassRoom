import React from 'react'
import { useState } from 'react'

import arrowLeft from '../../assets/arrowLeft.svg'
import arrowRight from '../../assets/arrowRight.svg'

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0)
  const length = slides.length

  const nextSlide = () => {
    setCurrent(current + 1)
    if (current === slides.length - 1) setCurrent(0)
  }

  const prevSlide = () => {
    setCurrent(current - 1)
    if (current === 0) setCurrent(slides.length - 1)
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
      <p className="slider_count">
        {current + 1} / {slides.length}
      </p>
    </div>
  )
}

export default Slider
