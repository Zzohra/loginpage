import { useState } from "react"
import { Bs0Square, BsTrash,BsPenFill } from 'react-icons/bs'
import {FaEdit, FaTrash} from 'react-icons/fa'
import { FaTrashAlt } from "react-icons/fa"
export default function Fav(props) {
  // const arr=[2,3,4]
  // console.log("this is before pushing",arr)
  // arr.push(5)
  // console.log("this is after pushing",arr)

  const [input, setInput] = useState('')
  const [editId, setEditId] = useState('')
  const [update, setUpdate] = useState('')
  const [checked,setChecked]=useState(false)
  const [items, setItems] = useState([
    {
      name: 'eggs',
      id: 1,
      isChecked:false
    },
    {
      name: "veggies",
      id: 2,
      isChecked:false
    }
  ])

 

  function adder() {
    const newId = items?.length > 0 ? items[items.length - 1].id + 1 : 1;

    setItems([...items, { name: input, id: newId,isChecked:false }])


  }
  function deleter(id) {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));

  }

  function remover() {
    const filteredArr=items.filter((item)=>item.isChecked===false)
    setItems(filteredArr)
    
  }
  function updater() {
    const newArr = items.map((item) => {
      if (item.id === editId) {
        return { ...item, name: update }
      }
      else {
        return item
      }
    })
    setItems(newArr)

  }
  const changeChecked=(id,checkValue)=>{
    console.log(checkValue)
    const newArr = items.map((item) => {
      if (item.id === id) {
        return { ...item, isChecked:checkValue }
      }
      else {
        return item
      }
    })
    setItems(newArr)
  }
  return (
    <>

      <div className="ml-5 h-screen w-screen flex flex-col gap-4 items-center justify-center">
        <div className="flex gap-2">
          <input value={input} type="text" className="border-2 border-red-700 ml-5 rounded"
            onChange={(e) => { setInput(e.target.value) }} />
          {/* <textarea value={} className="border-2 border-black"></textarea> */}




          <button className="text-white bg-blue-500 p-2 rounded-md" onClick={() => {
            if (input === "") {
              return
            } else {
              adder()
            }
          }} >ADD</button>
          <button 
       
          className="p-3  text-white bg-red-600 rounded-md" value={checked} onClick={()=>remover()}>
            Delete Selected
          </button>
          <button
          className="p-3 border-black border-2 rounded-md"
          >
            Select All
          </button>
        </div>

        <ul>
          {items?.map((item) => {
            return (
              <li className="flex gap-2 cursor-pointer mb-2 items-center" key={item.id}>

                {(editId === item.id) ? 
                <input className="border-2 border-black" type="text" value={update} onChange={(e) => { setUpdate(e.target.value) }} /> 
                :
                <>
                <input type="checkbox" checked={item.isChecked} onChange={(e)=>changeChecked(item.id,e.target.checked)} />
                <div >{item.name} </div>
                {/* {item.isChecked && <div>did it work?</div>} */}
                </>
                }



                <button className="text-red-900 " onClick={() => deleter(item.id)}><FaTrash /></button>
                <button
                  onClick={() => {
                    setEditId(item.id)
                    setUpdate(item.name)
                  }}
                  className="p-1 text-black rounded-md text-white" ><FaEdit/></button>
                {(editId === item.id) && <button onClick={() => {
                  updater()
                  setEditId('aaaaa')
                }}
                  className="p-1 bg-red-600 text-white rounded-md">Done</button>}
              </li>
            )
          })}
        </ul>
{/* <input type="checkbox" checked={checked} onChange={(e)=>{
  setChecked(e.target.checked)
}} /> */}
      </div>


    </>
  )
}