import React, { useContext, useState } from 'react'
import PropTypes from 'prop-types'
import Box from './Box'
import { ArrayContext } from './App'

function BoxRenderer(props) {
  
  const [harray, setHarray, width] = useContext(ArrayContext)

  return(
    <>
      {
        harray.map((value, i) => {
          return(<Box idNumber={i} key={i} height={value} width={width} />)
        })
      }
    </>
  )
}

export default function BoxComponent(props) {
  const [boxes, setBoxes] = useState(50)

  return (
    <div className = 'flex w-4/5 h-80'>
      <BoxRenderer boxes={boxes} />
    </div>
  )
}
// BoxComponent.propTypes = {

// }

// BoxComponent.defaultProps = {
    
// }