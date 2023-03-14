import React from 'react'
import Button2 from '../components/button2'
import { Link } from 'react-router-dom'

const Confirm = () => {
  return (
    <div className='w-full h-screen flex flex-col  items-center justify-center px-6'>
      <h5 className=' font-bold text-2xl mb-2'>Confirm Candidate</h5>
      <div className="flex w-full flex-col">
        <div className='w-full h-32 rounded-md bg-stone-500 p-4 m-3'></div>
        <p className="text-black">John Doe</p>
      </div>
      <p className='font-light text-sm mb-4'>You have selected Atiku as your preferred candidate. Click the button to submit</p>
      <Link to={`/completed`} className='w-full'>
      <Button2 label="Submit your vote" handleClick={() => {}} />
      </Link>
    </div>
  )
}

export default Confirm