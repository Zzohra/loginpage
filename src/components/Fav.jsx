import { useState } from "react"
import {Bs0Square, BsTrash} from 'react-icons/bs'
export default function Fav(props){
  // const arr=[2,3,4]
  // console.log("this is before pushing",arr)
  // arr.push(5)
  // console.log("this is after pushing",arr)
   const [input, setInput]=useState('')
   const [testInput,setTestUnput]=useState('')
   const [items,setItems]=useState([
    {
      name:'eggs',
      id:1
    },
    {
      name:"veggies",
      id:2
    }
   ])
    // onChange={(event)=>{
    //   setColor(event.target.value)   setItems([...items, inputText])
   function adder(){
    setItems([...items, input])

    setInput('')
   }

  return(
    <>

    <div className="ml-5">  
<input value={input} type="text" className="border-2 border-red-700 ml-5 rounded" 
 onChange={(e)=>{setInput(e.target.value)}} />
{/* <textarea value={} className="border-2 border-black"></textarea> */}
<button onClick={adder} >ADD</button>

<ul>
  {items.map((item)=>{ return(
<li className="flex gap-2 cursor-pointer  items-center">
  {item.name} <button><BsTrash/></button>
</li>
  )})}
</ul>

    </div>


    </>
  )
}