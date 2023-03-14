import React from 'react'
import Button from '../components/button'
import { Link } from 'react-router-dom'

const All = () => {
  const [value, setValue] = React.useState('');
  return (
    <div className='w-full h-screen flex flex-col px-6 pt-12'>
      <h3 className=' font-bold text-2xl mb-5'>BB Naija</h3>
      <h5 className=' font-semibold text-1xl mb-3'>Select your favorite candidate</h5>
      <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col items-center justify-center">
                <div className='w-32 h-32 rounded-md bg-stone-500 p-4 m-3'></div>
                <p className="text-gray-500">John Doe</p>
           </div>
            <div className="flex flex-col items-center justify-center">
                <div className='w-32 h-32 rounded-md bg-stone-500 p-4 m-3'></div>
                <p className="text-gray-500">John Doe</p>
           </div>
            <div className="flex flex-col items-center justify-center">
                <div className='w-32 h-32 rounded-md bg-stone-500 p-4 m-3'></div>
                <p className="text-gray-500">John Doe</p>
           </div>
            <div className="flex flex-col items-center justify-center">
                <div className='w-32 h-32 rounded-md bg-stone-500 p-4 m-3'></div>
                <p className="text-gray-500">John Doe</p>
           </div>
      </div>
      <Link to={`/otp`} className='w-full'>
      <Button label="Select" handleClick={() => {}} />
      </Link>
    </div>
  )
}

export default All