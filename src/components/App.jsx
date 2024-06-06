import React, { useState } from 'react'
import BoxComponent from './BoxComponent'
import shuffle from './Shuffler'

import '../styles/App.css'

export const ArrayContext = React.createContext(null)

function App() {
  const [boxes, setBoxes] = useState(10)
  let n = boxes
  let width = 100/n
  let heightdiff = width
  let array = [];
  for (let i = 0; i < n; i++) {
    array[i] = heightdiff * (i+1)
  }
  const [harray, setHarray] = useState(array)
  
  const shuffler = () => setHarray(shuffle(harray))

  const sort = () => {
    for(let i = 0; i < harray.length; i++) {
      for (let j = 0; j < harray.length-i; j++) {
          if (harray[j] > harray[j+1]) {
              
          }
      }
  }
  }

  const valueProvider = (val) => {
    return val
  }

  const changeBoxes = (e) => {
    setBoxes(e.target.value)
    return [harray, setHarray, width]
  }

  return (
    <div className="bg-gradient-to-r from-slate-900 to-slate-700 h-screen flex flex-col gap-16 justify-center items-center">
      <ArrayContext.Provider value={changeBoxes}>
        <div id="actions" className='w-4/5 flex justify-between'>
          <button className='text-slate-100 bg-teal-700 px-5 py-2.5 shadow-xl rounded-md active:bg-teal-800 active:text-slate-200 transition-all ease-in-out' onClick={sort}>Sort</button>
          <button className='text-slate-100 bg-teal-700 px-5 py-2.5 shadow-xl rounded-md active:bg-teal-800 active:text-slate-200 transition-all ease-in-out' onClick={shuffler}>Shuffle Array</button>
          <input type="range" name="" id="" value={boxes} onChange={changeBoxes} min='5' max='1000' step='5'/>
        </div>
        <BoxComponent />
      </ArrayContext.Provider>
    </div>
  )
}

export default App
