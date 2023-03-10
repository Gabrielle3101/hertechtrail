import React from 'react'
import Button2 from '../components/button2'
import { Link } from 'react-router-dom'
import TextInput from '../components/textinput'

const Select = () => {
  const [value, setValue] = React.useState('');
  return (
    <div className='w-full h-screen flex flex-col  px-6 pt-12'>
      <h3 className=' font-bold text-2xl mb-5'>Select a vote</h3>
      <h5 className=' font-semibold text-1xl mb-3'>Click the button to vote</h5>
      <div className="grid grid-cols-2 gap-3 mb-3">
        <div className="border-solid flex flex-col items-center justify-center border border-black rounded-md">
         <div className='w-24 h-fit-content rounded-full bg-green-600 p-4 m-3'></div>
         <p className="text-gray-500">BB Naija</p>
        </div>
        <div className="border-solid flex flex-col items-center justify-center border border-black rounded-md">
         <div className='w-24 h-fit-content rounded-full bg-green-600 p-4 m-3'></div>
         <p className="text-gray-500">BB Naija</p>
        </div>
        <div className="border-solid flex flex-col items-center justify-center border border-black rounded-md">
         <div className='w-24 h-fit-content rounded-full bg-green-600 p-4 m-3'></div>
         <p className="text-gray-500">BB Naija</p>
        </div>
        <div className="border-solid flex flex-col items-center justify-center border border-black rounded-md">
         <div className='w-24 h-fit-content rounded-full bg-green-600 p-4 m-3'></div>
         <p className="text-gray-500">BB Naija</p>
        </div>
      </div>
      <Link to={`/all`} className='w-full'>
      <Button2 label="See all" handleClick={() => {}} />
      </Link>
      <h3 className='text-base w-full text-gray-300 text-center font-bold'>OR</h3>
      <h5 className=' font-semibold text-1xl mb-3'>Enter vote code</h5>
      <TextInput min='1' max='30' value={value} handleChange={(e) => setValue(e)} placeholder='Enter vote code' />
    </div>
  )
}

export default Select
