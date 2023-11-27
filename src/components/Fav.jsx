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
   
   const newId = items.length > 0 ? items[items.length - 1].id+1 : 1;

const newItem={
  id:newId,
  name:input
}

   function adder(){
    setItems([...items, newItem])

    setInput('')
   }

function deleter(id){
  setItems((prevItems) => prevItems.filter((item) => item.id !== id));
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
<li className="flex gap-2 cursor-pointer  items-center" key={item.id}>
  {item.name} <button onClick={()=>deleter(item.id)}><BsTrash/></button>
</li>
  )})}
</ul>

    </div>


    </>
  )
}