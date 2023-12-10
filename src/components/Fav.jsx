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
  const [selectAllValue,setSelectAllValue]=useState(false)
  const [isDelete,setIsDelete]=useState(false)
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
  setSelectAllValue(!selectAllValue) //true
  if(selectAllValue===false){
    setIsDelete(true)
  }else{
    setIsDelete(false)
  }
  const deleteSelected=items.map((item)=>({...item, isChecked:!selectAllValue}))
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
    let count=0
    const newArr = items.map((item) => {
      
      if (item.id === id) {
        if(checkValue===true ){
          console.log(count)
          count=count+1
        }
        return { ...item, isChecked:checkValue }
      }
      else {
        if(item.isChecked===true) count=count+1
        return item
      }
    })
    console.log(count)
    if(count>0){
      setIsDelete(true)
    }else{
      setIsDelete(false)
    }
    setItems(newArr)
  }
  return (
    <>

<div className="bg-[#ece1f0] flex flex-col items-center w-screen h-screen">

      <div className=" bg-white mt-[15%]   w-[60%] h-[20%] shadow-lg flex flex-col gap-4 items-center justify-center">
      
         <div>
{          <div className="flex gap-4">
{ isDelete && <button 
       
       className="p-3  text-white bg-red-600 rounded-md" value={checked} onClick={()=>remover()}>
         Delete Selected
       </button>}
       <button
       className="p-3 border-black border-2 rounded-md" onClick={()=>selecter()}
       >
      { !selectAllValue? "Select All":"Deselect All"}
       </button>
</div>
          
          }

          <h1 className="font-semibold text-3xl capitalize text-black-100">task manager</h1>

          </div>
        <div className="  w-[650px] h-[30%] bg-[#ebecfb]  rounded-md">
        <input placeholder="e.g. DO DISHES U FILTHY WOMAN" value={input} type="text" className="w-[75%] pl-2 py-3 rounded bg-[#ebecfb]"
            onChange={(e) => { setInput(e.target.value) }} />


          <button className="text-white bg-[#B619F3] py-3 w-[25%] rounded-r-md" onClick={() => {
            if (input === "") {
              return
            } else {
              adder()
            }
          }} >SUBMIT</button>

        </div>
</div>


        <ul className="mt-[100px] w-[60%] flex-col ">
          {items?.map((item) => {
            return (
              <li className="w-full h-[80px] mb-[2%] text-lg flex bg-white  cursor-pointer px-[10%]  items-center  " key={item.id}>

                {(editId === item.id) ? 
                <input className="border-2 border-black" type="text" value={update} onChange={(e) => { setUpdate(e.target.value) }} /> 
                :
                <>
                <input type="checkbox"  checked={item.isChecked} onChange={(e)=>changeChecked(item.id,e.target.checked)} />
                <div className="pl-[5%]  " >{item.name} </div>
                {/* {item.isChecked && <div>did it work?</div>} */}
                </>
                }


<div className=" w-full flex justify-end items-end">
              <button className="text-red-900 p-4 " onClick={() => deleter(item.id)}><FaTrash /></button>
                <button
                  onClick={() => {
                    setEditId(item.id)
                    setUpdate(item.name)
                  }}
                  className="p-4  text-black rounded-md " ><FaEdit/></button>
</div>

                  
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