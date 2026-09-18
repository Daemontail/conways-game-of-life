import { useState,useRef,useEffect } from 'react'
import {checkNeighbours, generateMatrix} from '../scripts/scripts'
import {flipVal} from '../scripts/scripts'
export default function App() {
  const [matrix,setMatrix] = useState(generateMatrix(8))
  const sectionRef = useRef(null)
  const [game,setGame] = useState(false)

  useEffect(()=>{
    if(game){
    const interval = setInterval(()=>checkNeighbours(matrix),1000)
    return (()=>clearInterval(interval))
    }
  },[game])


  const matrixEls = matrix.map((arrEl,rowI)=>{
    return arrEl.map((num,colI)=>(
      <button key={`row-${rowI}-col-${colI}`} 
        onClick={()=>setMatrix(prev=> flipVal(prev,rowI,colI))}
        className={num?'on':'off'}>
      </button>
    )
  )
})
  return (
    <>
     <h1>Conway's game of life</h1>
     <section className='button-els' ref={sectionRef}>
      {matrixEls}
      </section> 
      <button className='toggle' onClick={()=>setGame(prev=>!prev)}>Toggle simulation</button>
    </>
  )
    
}

