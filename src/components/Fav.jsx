import { useState } from "react"

export default function Fav(props){

   const [input, setInput]=useState('')
    const [items,setItems]=useState(['eggs','veggies'])
    // onChange={(event)=>{
    //   setColor(event.target.value)   setItems([...items, inputText])
   function adder(){
    setItems([...items, input])
    setInput('')
   }

  return(
    <>

    <div className="ml-5">  
<input type="text" className="border-2 border-red-700 ml-5 rounded" 
 onChange={(event)=>{setInput(event.target.value)}} />

<button onClick={adder} >ADD</button>

<ul>
  {items.map((item)=>{ return(
<li>
  {item}
</li>
  )})}
</ul>

    </div>


    </>
  )
}