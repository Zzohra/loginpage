import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import mailSvg from '../src/icons/mail.svg'
import close from '../src/icons/close.jpg'
import lock from '../src/icons/lock.svg'
import eye from '../src/icons/eye.svg'



function App(){

  const [count, setCount] = useState(0)
  return (

    <div className='mt-[150px] sm:mt-[10px] sm:mb-[20px] sm:ml-[400px] ml-[80px]'>
    <div className=' w-[220px]  h-[370px] rounded-lg sm:w-[656px] sm:h-[656px] sm:mt-[40px]  sm:rounded-2xl  bg-[#E7FFFB]'>
   
    <div className=' w-[210px]   pt-[12px] pl-[2px] flex justify-around sm:w-[630px] sm:h-[100px] sm:pt-[35px]  '>
     <a className='mr-[40px]  font-bold sm:text-[30px] sm:w-[154px] sm:font-bold sm:mr-[280px] ' >Login as</a>
   <img src={close} className=' mt-[6px] ml-[46px] w-[13px] h-[13px] sm:mt-[15px] sm:w-[18px] sm:h-[18px] '/>
    </div>
    <div class="border-t border-gray-300 sm:border-gray-400 mt-[10px]" ></div>


   <div className='mt-[5px] sm:mt-[20px] sm:ml-[70px]'>
   <a className='font-medium text-[13px] ml-[20px] sm:text-[24px] sm:font-normal sm:h-[36px] sm:w-[245px]  '>Welcome Back, </a>  </div>



    <div className='ml-[21px] mt-[4px] sm:mt-[31px] sm:ml-[80px]'>
      <a className='font-medium text-[8px] text-gray-500 ml-[8px] sm:ml-[20px] sm:text-[18px] sm:font-normal'>Email Address</a>
   
   <div className='flex items-start '  > 
    <input type="text" 
      placeholder ='eg.celestine@example.com' class='placeholder:text-[8px] placeholder:px-[2px] sm:placeholder:text-[18px]  
      border-[1px] sm:rounded-[15px]  border-[#07A189] rounded-[5px] pl-[18px] w-[180px] relative  sm:pl-[40px] sm:h-[64px] sm:w-[450px]  sm:ml-[30px]' ></input> 
   
   <img src={mailSvg} className=' absolute w-[10px] h-[10px] mt-[7px] ml-[5px] sm:mt-[25px] sm:ml-[35px] sm:h-[16px] sm:w-[26px]' ></img>

   </div>

      </div>
  

      <div className='ml-[21px] mt-[4px] sm:mt-[31px] sm:ml-[80px]'>
      <a className='font-medium text-[8px] text-gray-500 ml-[8px]  sm:ml-[20px] sm:text-[18px] sm:font-normal'>Password</a>
   
   <div className='flex items-start  '  > 
    <input type="text" 
      placeholder ='*********' class='placeholder:text-[8px] placeholder:pr-[2px] sm:placeholder:text-[18px]  
       border-[1px] sm:rounded-[15px]  border-[#07A189] rounded-[5px] pl-[18px] pr-[20px] w-[180px] relative sm:pl-[40px] sm:h-[64px] sm:w-[450px]  sm:ml-[30px]' ></input> 
   
   <img src={lock} className=' absolute w-[10px] h-[10px] mt-[7px] ml-[5px] sm:ml-[35px] sm:mt-[25px] sm:h-[16px] sm:w-[26px]' ></img>
   <img src={eye} className=' absolute w-[10px] h-[10px] mt-[7px] ml-[160px] sm:ml-[450px] sm:mt-[25px] sm:h-[17px] sm:w-[26px]' ></img>
   <a className=' absolute font-medium text-[7px] text-gray-500 mt-[30px] ml-[-60px]  sm:mt-[70px] sm:ml-[334px]  sm:text-[18px]  sm:font-normal'>Forgot Password?</a>

   </div>

  

      </div>


<button class="bg-black text-white text-[11px] font-semibold rounded h-[25px] w-[180px] mt-[20px] ml-[18px]
sm:w-[460px] sm:h-[50px] sm:rounded-[10px] sm:text-[18px] sm:font-semibold sm:mt-[45px] sm:ml-[100px]
">
sign in
</button>



<div className='grid justify-items-center sm:mt-[15px] '>

<div class="relative border-t border-gray-300 mt-[25px] mr-[300px] w-[90px] 
                     sm:border-t-[2px] sm:mt-[40px] sm:w-[310px] sm:mr-[510px] " ></div>
<a className='absolute mt-[20px] ml-[5px] text-gray-500 text-[7px] font-medium sm:mt-[25px] sm:text-[18px]'>OR</a>
<div class="absolute border-t border-gray-300 mt-[25px] ml-[130px] w-[90px]
                       sm:border-t-[2px] sm:mt-[40px] sm:w-[310px] sm:ml-[350px]" ></div>

</div>

<div className='grid justify-items-center sm:mt-[15px] '> 
<div className='mt-[20px] text-gray-400 text-[9px] font-medium sm:text-[20px]'> New user Account ? 
<a className='text-[#07A189] ml-[5px]'>Sign up</a>
</div>
</div>


  </div>
  </div>
  )
}

export default App






// function App() {
//   const [count, setCount] = useState(0)


// const [color, setColor]=useState(null)

// const handleClick = (color) => {
// setColor(color);
// };


//   return (
//   <div >
// <cente classNamer='flex gap-2' >
//           <di classNamev='w-[100px] h-[200px] bg-red-500' onClick={() => handleClick("red")} >red</div>
//           <di classNamev='w-[100px] h-[200px] bg-green-500' onClick={() => handleClick("green")} >green</div>
//           <di classNamev='w-[100px] h-[200px] bg-blue-500' onClick={() => handleClick("blue💙")} >blue</div>
//           <di classNamev='mt-[400px]'>
//         {color ? `You clicked the ${color} box!` : ""}
//       </div>
//         </center>

//   </div>  
  
//   )
// }

// export default App


// tcss prac