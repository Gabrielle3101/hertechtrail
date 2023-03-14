import React from 'react'
import Button2 from '../components/button2'
import { Link } from 'react-router-dom'

const Completed = () => {
  return (
    <div className='w-full h-screen flex flex-col  items-center justify-center px-6'>
      <div className='w-32 h-32 rounded-full bg-green-600 mb-10 p-4'>
        <div className='w-full h-full rounded-full bg-white p-4'>
        <div className='w-full h-full rounded-full bg-green-400 p-4'></div>
        </div>
      </div>
      <h5 className=' font-semibold text-2xl mb-2'>Vote Sucessful!</h5>
      <p className='font-light text-sm mb-4'>Your vote has been successfully submitted</p>
      <Link to={`/`} className='w-full'>
      <Button2 label="Okay, got it!" handleClick={() => {}} />
      </Link>
    </div>
  )
}

export default Completed