import React from 'react'
import PropTypes from 'prop-types'

export default function Box(props) {
  return (
    <div id={props.idNumber} className='mt-auto bg-gradient-to-tr from-zinc-700 to-neutral-500' style={{height: `${props.height}%`, width: `${props.width}%`}}>
      
    </div>
  )
}

// Box.propTypes = {

// }

// Box.defaultProps = {

// }