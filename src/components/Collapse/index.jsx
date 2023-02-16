import React from 'react'
import Arrow from '../../assets/arrow.png'

const Collapse = ({ title, content }) => {
  const isCollapse = (e) => {
    e.preventDefault()
    const divText = e.target.nextSibling
    const arrow = e.target.lastChild

    if (!divText.classList.contains('show')) {
      divText.classList.add('show')
      arrow.classList.add('rotate')
    } else {
      divText.classList.remove('show')
      arrow.classList.remove('rotate')
    }
  }
  return (
    <div className="collapse" id="collapse_about">
      <button type="button" className="collapse_button" onClick={isCollapse}>
        {title}

        <img src={Arrow} alt="" className="collapse_arrow" />
      </button>
      <div className="collapse_content">
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
