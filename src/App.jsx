
import './App.css'
import mailSvg from '../src/icons/mail.svg'
import close from '../src/icons/closeSvg.svg'
import lock from '../src/icons/lock.svg'
import eye from '../src/icons/eye.svg'



function App(){


  return (

//     <div className=' border-8 h-screen w-screen flex justify-center items-center border-red-600 '>
//     <div className=' w-[220px]  h-[370px] rounded-lg sm:w-[656px] sm:h-[656px] sm:mt-[40px]  sm:rounded-2xl  bg-[#E7FFFB]'>
   
//     {/* <div className='  pt-[12px] pl-[2px] flex justify-around sm:w-[630px] sm:h-[100px] sm:pt-[35px]  '>
//      <a className='mr-[40px]  font-bold sm:text-[30px] sm:w-[154px] sm:font-bold sm:mr-[280px] ' >Login as</a>
//    <img src={close} className=''/>
//     </div> */}

//     {/* <div className="border-t border-gray-300 sm:border-gray-400 mt-[10px]" ></div> */}
// <div className='flex justify-between p-6 border-b border-[#B3B3B3]'>
//   <div className='font-bold text-2xl'>Login as</div>
//   <img src={close} alt="close icon" />
// </div>

//    <div className='mt-[5px] sm:mt-[20px] sm:ml-[70px]'>
//    <a className='font-medium text-[13px] ml-[20px] sm:text-[24px] sm:font-normal sm:h-[36px] sm:w-[245px]  '>Welcome Back, </a>  </div>



//     <div className='ml-[21px] mt-[4px] sm:mt-[31px] sm:ml-[80px]'>
//       <a className='font-medium text-[8px] text-gray-500 ml-[8px] sm:ml-[20px] sm:text-[18px] sm:font-normal'>Email Address</a>
   
//    <div className='flex items-start '  > 
//     <input type="text" 
//       placeholder ='eg.celestine@example.com' className='placeholder:text-[8px] placeholder:px-[2px] sm:placeholder:text-[18px]  
//       border-[1px] sm:rounded-[15px]  border-[#07A189] rounded-[5px] pl-[18px] w-[180px] relative  sm:pl-[40px] sm:h-[64px] sm:w-[450px]  sm:ml-[30px]' />
   
//    <img src={mailSvg} className=' absolute w-[10px] h-[10px] mt-[7px] ml-[5px] sm:mt-[25px] sm:ml-[35px] sm:h-[16px] sm:w-[26px]' />

//    </div>

//       </div>
  

//       <div className='ml-[21px] mt-[4px] sm:mt-[31px] sm:ml-[80px]'>
//       <a className='font-medium text-[8px] text-gray-500 ml-[8px]  sm:ml-[20px] sm:text-[18px] sm:font-normal'>Password</a>
   
//    <div className='flex flex-col  '  > 
//     <input type="text" 
//       placeholder ='*********' className='placeholder:text-[8px] placeholder:pr-[2px] sm:placeholder:text-[18px]  
//        border-[1px] sm:rounded-[15px]  border-[#07A189] rounded-[5px] pl-[18px] pr-[20px] w-[180px] relative sm:pl-[40px] sm:h-[64px] sm:w-[450px]  sm:ml-[30px]' /> 
   
//    <img src={lock} className=' absolute w-[10px] h-[10px] mt-[7px] ml-[5px] sm:ml-[35px] sm:mt-[25px] sm:h-[16px] sm:w-[26px]' />
//    <img src={eye} className=' absolute w-[10px] h-[10px] mt-[7px] ml-[160px] sm:ml-[450px] sm:mt-[25px] sm:h-[17px] sm:w-[26px]' />

//    <div className='text-right w-full   font-medium text-[7px] text-gray-500    sm:text-[18px]  sm:font-normal'>Forgot Password?</div>
//    </div>



//       </div>


// <button className="bg-black text-white text-[11px] font-semibold rounded h-[25px] w-[180px] mt-[20px] ml-[18px]
// sm:w-[460px] sm:h-[50px] sm:rounded-[10px] sm:text-[18px] sm:font-semibold sm:mt-[45px] sm:ml-[100px]
// ">
// sign in
// </button>



// <div className='grid justify-items-center sm:mt-[15px] '>

// <div className="relative border-t border-gray-300 mt-[25px] mr-[300px] w-[90px] 
//                      sm:border-t-[2px] sm:mt-[40px] sm:w-[310px] sm:mr-[510px] " ></div>
// <a className='absolute mt-[20px] ml-[5px] text-gray-500 text-[7px] font-medium sm:mt-[25px] sm:text-[18px]'>OR</a>
// <div className="absolute border-t border-gray-300 mt-[25px] ml-[130px] w-[90px]
//                        sm:border-t-[2px] sm:mt-[40px] sm:w-[310px] sm:ml-[350px]" ></div>

// </div>

// <div className='grid justify-items-center sm:mt-[15px] '> 
// <div className='mt-[20px] text-gray-400 text-[9px] font-medium sm:text-[20px]'> New user Account ? 
// <a className='text-[#07A189] ml-[5px]'>Sign up</a>
// </div>
// </div>


//   </div>
//   </div>
<div className='h-screen w-screen border-4 flex justify-center items-center border-red-600'>
 <div className='w-[550px] h-[480px] rounded-lg bg-[#E7FFFB]'>
 <div className='flex justify-between p-6 border-b border-[#B3B3B3]'>
    <div className='text-2xl font-bold '>Login as</div>
    <img src={close} alt="" />
  </div>
  <div className=' w-full  px-16 py-4 '>
    <div className='mb-3 text-xl'>Wecome Back,</div>
    <div className='flex flex-col gap-5'>
    <div className='relative'>
      <div>
        Email Address
      </div>
      <input className='rounded-lg w-full py-[3%] border border-[#07A189]' type="text" />
      <img className='absolute top-10 left-2' src={mailSvg} alt="" />
    </div>
    <div className='relative'>
      <div>Password</div>
      <input type="text"  className='rounded-lg w-full py-[3%] border border-[#07A189]'/>
      <img className='absolute top-9 left-2' src={eye} alt="" />
    </div>
    </div>
    <div className='text-right mt-2 mb-6 text-[#6C6C6C] font-semibold'>
      Forgot Password?
    </div>
    <button className='bg-black text-white px-4 py-2 rounded-lg w-full'>
      Sign in
    </button>
  </div>
  <div className='flex gap-2 justify-center items-center'>
    <div className='text-[#6C6C6C]'>New User Account?</div>
    <div className='text-[#07A189] font-bold text-lg'>Sign up</div>
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