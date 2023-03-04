import React from 'react'
import Button from '../components/button'
import { Link } from 'react-router-dom'
import imageToAdd from "../assets/ps.png";

const Email = () => {
  const [value, setValue] = React.useState('');
  return (
    <div className='w-full h-screen flex items-center flex-col  px-6 pt-12'>
        <div className="bg-green-600 p-5 m-0 w-full h-32">
            <h3 className="font-bold text-white">Your PVC Is Ready!</h3>
        </div>
      <h3 className=' font-bold text-2xl mb-5'>Hello Jane👋</h3>
      <img className='mb-4' src={imageToAdd} alt="Image" />
      <h4 className="font-semibold">Your PVC is now ready for collection. Click the button to check your designated collection center to find out where you can collect it.</h4>
      <Link to={`/status`} className='w-full'>
      <Button label="Check collection centre" handleClick={() => {}} />
      </Link>
    </div>
  )
}

export default Email
