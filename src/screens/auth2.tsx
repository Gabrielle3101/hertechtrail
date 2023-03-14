import React from 'react'
import Button2 from '../components/button2'
import { Link } from 'react-router-dom'
import TextInput from '../components/textinput'

const Status = () => {
  const [value, setValue] = React.useState('');
  return (
    <div className='w-full h-screen flex flex-col  px-6 pt-12'>
      <h3 className=' font-bold text-2xl mb-5'>Authentication</h3>
      <TextInput min='1' max='30' value={value} handleChange={(e) => setValue(e)} placeholder='Enter VIN' />
      <Link to={`/select`} className='w-full'>
      <Button2 label="Login and vote" handleClick={() => {}} />
      </Link>
    </div>
  )
}

export default Status