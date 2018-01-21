import React from 'react'

const Arrows = (props) => {
  return (
    <div className="container">
      <div className="flexwrap">
      <div className="arrow-container">
      <a href="#" className={`${props.arrowClr}`}>
           <span className={`${props.arrowDir}`} />
      </a>
         </div>
      </div>
    </div>
  )
}

export default Arrows
