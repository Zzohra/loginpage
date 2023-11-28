import { useState } from "react"
import {Bs0Square, BsTrash} from 'react-icons/bs'
export default function Fav(props){
  // const arr=[2,3,4]
  // console.log("this is before pushing",arr)
  // arr.push(5)
  // console.log("this is after pushing",arr)
   const [input, setInput]=useState('')

   const [editId,setEditId]=useState()
   const [testInput,setTestUnput]=useState('')
   const cuto=[1,2,3,4,6,7,8,9]

  console.log( cuto[cuto.length-1])
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
   



   function adder(){
    const newId = items?.length > 0 ? items[items.length - 1].id+1 : 1;

    setItems([...items,{name:input,id:newId}])

    setInput('')
   }
function deleter(id){
  setItems((prevItems) => prevItems.filter((item) => item.id !== id));
}
//.map()  return an array, it can onli be used on an array
//.filter() return an array too, and it can also be onli used on an array

  return(
    <>

    <div className="ml-5 h-screen w-screen flex flex-col gap-4 items-center justify-center">  
<div className="flex gap-2">
<input value={input} type="text" className="border-2 border-red-700 ml-5 rounded" 
 onChange={(e)=>{setInput(e.target.value)}} />
{/* <textarea value={} className="border-2 border-black"></textarea> */}
<button className="text-white bg-blue-500 p-2 rounded-md" onClick={adder} >ADD</button>
</div>

<ul>
  {items?.map((item)=>{ return(
<li className="flex gap-2 cursor-pointer mb-2 items-center" key={item.id}>
  {(editId===item.id) ? <input className="border-2 border-black" type="text" />: <div>{item.name} </div>}
  <button onClick={()=>deleter(item.id)}><BsTrash/></button>
  <button 
  onClick={()=>{
    setEditId(item.id)
  }}
  className="p-1 bg-blue-800 rounded-md text-white">Edit</button>
{(editId===item.id) && <button onClick={()=>setEditId('ameer')} className="p-1 bg-red-600 text-white rounded-md">Done</button>}
</li>
  )})}
</ul>

    </div>


    </>
  )
}