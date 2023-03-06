import React, { useState } from 'react'
import Arrow from '../../assets/arrow.png'

const Collapse = ({ title, content }) => {
  const [Open, setOpen] = useState(false)

  const isCollapse = (e) => {
    e.preventDefault()
    setOpen(!Open)
  }

  return (
    <div className="collapse collapse_about">
      <button type="button" className="collapse_button" onClick={isCollapse}>
        {title}

        <img
          src={Arrow}
          alt=""
          className={'collapse_arrow ' + (Open ? 'rotate' : '')}
        />
      </button>
      <div className={'collapse_content ' + (Open ? 'show' : '')}>
        {Array.isArray(content) ? (
          <ul className="collapse_list">
            {content.map((equipment, index) => (
              <li key={index} className="collapse_list-element">
                {equipment}
              </li>
            ))}
          </ul>
        ) : (
          <p className="collapse_text">{content}</p>
        )}
      </div>
    </div>
  )
}

export default Collapse
