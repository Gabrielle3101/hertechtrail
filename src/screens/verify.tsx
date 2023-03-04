import React from 'react'
import Button from '../components/button'
import { Link } from 'react-router-dom'
import TextInput from '../components/textinput'

const Verify = () => {
  const [value, setValue] = React.useState('');
  return (
    <div className='w-full h-screen flex flex-col  px-6 pt-12'>
      <h3 className=' font-bold text-2xl mb-5'>Verify Your Identity</h3>
      <h5 className=' font-semibold text-1xl mb-3'>Enter the 6-digit OTP sent to 0803xxxxx94</h5>
      <img src="./assets/msg.png" alt="" />
      <h5 className=' font-semibold text-green text-1xl mb-3'>_ _ _ _ _ _</h5>
      <div className='flex'>
            <h5 className=' font-semibold text-1xl mb-3'>Didn’t receive an OTP?</h5>
            <a href="">Resend</a>
      </div>
      <div className='flex'>
            <h5 className=' font-semibold text-1xl mb-3'>Don’t have access to 0803xxxxx94?</h5>
            <a href="">Click Here</a>
      </div>
      <Link to={`/verify`} className='w-full'>
      <Button label="Proceed" handleClick={() => {}} />
      </Link>
    </div>
  )
}

export default Verify