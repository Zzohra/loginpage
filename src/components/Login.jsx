import mailSvg from '../../src/icons/mail.svg'
import close from '../../src/icons/closeSvg.svg'
import lock from '../../src/icons/lock.svg'
import eye from '../../src/icons/eye.svg'


export default function Login(props){
    return(
        <div className='h-screen w-screen   flex justify-center items-center'>
<div className='sm:w-[550px] sm:h-[480px] w-[320px] h-[490px]  rounded-lg bg-[#E7FFFB]'>
<div className='flex justify-between p-6 border-b border-[#B3B3B3]'>
    <div className='text-2xl font-bold '>Login as</div>
    <img src={close} alt="" />
  </div>
  <div className=' w-full sm:px-16 px-8 py-4  '>
    <div className='mb-3 text-xl'>Welcome Back,</div>




    <div className='flex flex-col gap-5'>
    <div className='relative'>


      <div>
        Name
      </div>
      <input onChange={(event)=>{
        props.setUsername(event.target.value)

      }} className='rounded-lg w-full pl-9 py-[3%] border border-[#07A189]' type="text" />
      <img className='absolute sm:top-10  top-9  left-2' src={mailSvg} alt="" />
    </div>
    <div className='relative'>
      <div>Password</div>
      <input onChange={(event)=>{
        props.setPassword(event.target.value)

      }} type="text"  className='rounded-lg pl-8 w-full py-[3%] border border-[#07A189]'/>
      <img className='absolute sm:top-10 top-8 left-2' src={eye} alt="" />
    </div>
    </div>




    <div className='text-right mt-2 mb-6 text-[#6C6C6C] font-semibold'>
      Forgot Password?
    </div>
    <button className='bg-black text-white px-4 py-2 rounded-lg w-full'
    onClick={()=>{
     if({props.username} && {props.password} !=''){
      props.setIsLogged(true);
     }
     else ({props.username}== ''){
       <a>enter an email</a>
     } 
}}>
      Sign in
    </button>
  </div>
  <div className='flex '>
<div className=' relative border-t-[2px] w-[49%] my-4'> </div>
<div className='absolute text-[#E7FFFB]'>.</div>
<div className=' relative  text-[#6C6C6C] text-[20px] px-[20px]'>or</div>
<div className=' relative border-t-[2px] w-[49%]  my-4'> </div>

  </div>
  <div className='flex gap-2 justify-center items-center '>
    <div className='text-[#6C6C6C]'>New User Account?</div>
    <div className='text-[#07A189] font-bold text-lg'>Sign up</div>
  </div>

</div>

</div>
    )
}