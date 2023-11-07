export default function Entered(props){
  return(

    <>
    <h1 className="p-4 text-3xl">welcome  {props.username}</h1>

<div className='h-screen w-screen   flex justify-center items-center'>
<div className='sm:w-[550px] sm:h-[480px] w-[320px] h-[490px]  rounded-lg bg-[#e6d5eb] '> 
<div className="text-2xl font-bold p-2 flex  justify-center"> provide info </div>
<div  className='flex justify-between p-2 border-b border-[#B3B3B3]'></div>

<div className=' p-9 flex flex-col gap-5  '>
  
      <div className="text-xl font-bold text-[#562020]"  >
        favourite color
      </div>
      <input  className='rounded-lg w-[80%] pl-2 py-[2%] border border-[#151510]' type="text"
       onChange={(event)=>{
        props.setColor(event.target.value)
      }} />
    
      <div className="text-xl font-bold text-[#562020]">favourite food</div>
      <input type="text"  className='rounded-lg  w-[80%] pl-2 py-[2%] border border-[#151510]'
      onChange={(event)=>{
        props.setFood(event.target.value)
      }}
      />
   
<button className='bg-black text-white p-2 mt-4  rounded-lg w-[80%]' onClick={()=>{props.isSubmit(true)}}  >submit</button>
    </div>


</div>
</div>
</>
  )
}