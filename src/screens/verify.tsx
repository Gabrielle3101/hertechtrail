import React from 'react'
import Button from '../components/button'
import { Link } from 'react-router-dom'

const Verify = () => {
  const [value, setValue] = React.useState('');
  return (
    <div className='w-full h-screen flex flex-col  px-6 pt-12'>
      <h3 className=' font-bold text-2xl mb-5'>Verify Your Identity</h3>
      <h5 className=' font-semibold text-1xl mb-3'>Enter the 6-digit OTP sent to 0803xxxxx94</h5>
      <div className='w-32 h-32 rounded-full bg-green-600 mb-10 p-4'>
        <div className='w-full h-full rounded-full bg-white p-4'>
        <div className='w-full h-full rounded-full bg-green-400 p-4'></div>
        </div>
      </div>
      <h5 className=' font-semibold text-green text-1xl mb-3'>_ _ _ _ _ _</h5>
      <div className='flex'>
            <h5 className=' font-semibold text-1xl mb-3'>Didn’t receive an OTP? &nbsp; </h5>
            <a className='text-green' href="">Resend</a>
      </div>
      <div className='flex'>
            <h5 className=' font-semibold text-1xl mb-3'>Don’t have access to 0803xxxxx94? &nbsp;</h5>
            <a className='text-green' href="">Click Here</a>
      </div>
      <Link to={`/verify`} className='w-full'>
      <Button label="Proceed" handleClick={() => {}} />
      </Link>
    </div>
  )
}

export default Verify