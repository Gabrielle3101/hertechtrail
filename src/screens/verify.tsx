import React from 'react'
import Button from '../components/button'
import { Link } from 'react-router-dom'
import imageToAdd from "../assets/msg.png";

const Verify = () => {
  const [value, setValue] = React.useState('');
  return (
    <div className='w-full h-screen flex flex-col  items-center px-6 pt-12'>
      <h3 className=' font-bold text-2xl mb-5'>Verify Your Identity</h3>
      <h5 className=' font-semibold text-1xl mb-3'>Enter the 6-digit OTP sent to 0803xxxxx94</h5>
      <img className='mb-5' src={imageToAdd} alt="Image" />
      <h5 className=' font-semibold text-green-600 text-1xl mb-3'>__ __ __ __ __ __</h5>
      <div className='flex'>
            <h5 className=' font-semibold text-gray-500 text-1xl mb-3'>Didn’t receive an OTP? &nbsp; </h5>
            <a className='text-green-600' href="">Resend</a>
      </div>
      <div className='flex'>
            <h5 className=' font-semibold text-gray-500 text-1xl mb-3'>Don’t have access to 0803xxxxx94? &nbsp;</h5>
            <a className='text-green-600' href="">Click Here</a>
      </div>
      <Link to={`/info`} className='w-full'>
      <Button label="Submit →" handleClick={() => {}} />
      </Link>
    </div>
  )
}

export default Verify