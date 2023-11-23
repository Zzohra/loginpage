import { useState } from "react"
const favs=[
  {
    icon:'youtube.png',
    title:'youtube'
    
  },
  {
    icon:'youtube.png',
    title:'twitter'
  },
  {
    icon:'youtube.png',
    title:'insta'
  },
  {
    icon:'youtube.png',
    title:'anime'
  },
  {
    icon:'youtube.png',
    title:'msn'
  }
]
export default function Fav(props){
  // const friends=['zohra0','zohra1','zohra2']
  // friends.push('zohra3')
  // console.log(friends)
 
  // const newFriends=friends.map((name)=>{
  //   return `pretty ${name}`
  // })
  // console.log(newFriends)
  const [items,setItems]=useState(['eggs','vegetables'])
  return(
    <>
    <div className="ml-5">
    {/* {
  favs.map((obj)=>{
    return (<div>
      <div>
       { obj.icon}
      </div>
      <div>
        {obj.title}
      </div>
    </div>)
  })
} */}
<input type="text" className="border-2 border-red-700 ml-5 rounded" />
<button>ADD</button>

    </div>
    {/* <h1>hey {props.username}</h1>
    <h1>your favourite color is {props.color}</h1>
    <h1>your favourite food is {props.food}</h1> */}

    </>
  )
}