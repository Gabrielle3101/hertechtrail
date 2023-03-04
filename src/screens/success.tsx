import React from 'react'
import Button from '../components/button'
import { Link } from 'react-router-dom'
import imageToAdd from "../assets/thumb.png";

const Success = () => {
  const [value, setValue] = React.useState('');
  return (
    <div className='w-full h-screen flex justify-center items-center flex-col  px-6 pt-12'>
      <img src={imageToAdd} alt="Image" />
      <h3 className=' font-bold text-2xl mb-5'>Registration Successful</h3>
      <Link to={`/pvc`} className='w-full'>
      <Button label="Okay, Thanks" handleClick={() => {}} />
      </Link>
    </div>
  )
}

export default Success
