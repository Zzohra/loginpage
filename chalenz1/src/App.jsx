import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [color, setColor]=useState(null)

  function handleClick(colorToSet){
    setColor(colorToSet)
  }
  const btnStyle='border-2 px-2 py-2 border-black'

  const [darkmode,setDarkmode]=useState(false)

 function backg(bw){
   setDarkmode(bw)
 }
  
const bgChanger=`${darkmode?'bg-black':'bg-white'} flex gap-4`

  return (
  
  
     <div>
    
  
  <div className={bgChanger}>
  
  <button   className={btnStyle} onClick={()=>handleClick("red")} >red</button>
  
  <button className={btnStyle} onClick={()=>handleClick("blue")} >blue</button>
  
  <button  className={btnStyle} onClick={()=>handleClick("green")}>green</button>
  
  </div>
  <div className={`${color==='red'? 'bg-red-500':color==='blue'?'bg-blue-500':color==='green'?'bg-green-500':''} mt-5 border-2 border-black w-40 h-32`}></div>
 
 
  <button className='border-2 border-black ' onClick={()=>backg(true)} >turn dark mode on</button>
  <button className='border-2 border-black ' onClick={()=>backg(false)}>turn light mode on</button>
  </div>
  )
}

export default App


// const [color, setColor]=useState(null)

// const red =()=>{
//   setColor( "red")
// }


// const blue =()=>{
//   setColor( "blue")
// }

// const green =()=>{
//   setColor( "green")
// }

// const btnStyle="border-2 px-2 py-2 border-black "



//   const boxRed='mt-5 border-2 Oborder-black w-40 h-32 bg-red-500'

// const boxBlue="mt-5 border-2 Oborder-black w-40 h-32 bg-blue-900"

// const boxGreen="mt-5 border-2 Oborder-black w-40 h-32 bg-green-500"


// return (

//    <div>

// <div className='flex gap-4'>

// <button  className={btnStyle} onClick={red} >red</button>

// <button className={btnStyle} onClick={blue} >blue</button>

// <button  className={btnStyle} onClick={green}>green</button>

// </div>

// {color==="red" && <div 
// className={boxRed} >
// </div>
// }
// {
// color==="blue" && 
// <div className={boxBlue}></div>
// }

// {

// color==="green" && 
// <div className={boxGreen}></div>
// }


//  </div>