import { useState } from "react"
import { Bs0Square, BsTrash,BsPenFill } from 'react-icons/bs'
import {FaEdit, FaTrash} from 'react-icons/fa'
import { FaTrashAlt } from "react-icons/fa"
export default function NewFav(props) {
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

function selecter(){
  const deleteSelected=items.map((item)=>({...item, isChecked:true}))
 setItems(deleteSelected)
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
    <div className="w-screen h-screen flex justify-center bg-[#F5F5F5] items-center">
       <div className="flex flex-col space-y-20">
            <div className="flex bg-white px-10 py-8 flex-col gap-4 justify-center items-center">
                <div className="text-3xl capitalize">Task Manager</div>
                <div className="flex  ">
                    <input placeholder="eg. wash dishes" onChange={(e)=>e.target.value} className="py-[1.2%] xl:w-[400px] bg-gray-200 rounded-sm px-2 placeholder:text-gray-600" type="text" />
                    <button className="bg-purple-800 rounded-r-md text-white px-8 py-[1.2%]"
                    onClick={() => {
                        if (input === "") {
                          return
                        } else {
                          adder()
                        }
                      }} 
                    >Submit</button>
                </div>
            </div>
           <div className="flex flex-col space-y-4">
                {
                    items.map((item)=>
                        (<div key={item.id} className="bg-white px-8 py-4 flex justify-between">
                        <div className="flex gap-4 items-center justify-center">
                            <input type="checkbox" />
                            <div>{item.name}</div>
                        </div>
                        <div className="flex gap-2 justify-center items-center">
                            <div>
                                <FaTrash/>
                            </div>
                            <div>
                                <FaEdit/>
                            </div>
                        </div>
                    </div>
                    )
                    )
                }
           </div>
       </div>
    </div>
  )
}