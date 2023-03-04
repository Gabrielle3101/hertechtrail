import React from 'react'
import Button from '../components/button'
import { Link } from 'react-router-dom'
import TextInput from '../components/textinput'

const Status = () => {
  const [value, setValue] = React.useState('');
  return (
    <div className='w-full h-screen flex flex-col  px-6 pt-12'>
      <h3 className=' font-bold text-2xl mb-5'>Check Your PVC Status</h3>
      <h5 className=' font-semibold text-1xl mb-3'>Enter VIN/BVN/NIN</h5>
      <TextInput value={value} handleChange={(e) => setValue(e)} placeholder='Enter VIN/BVN/NIN' />
      <Link to={`/lcs`} className='w-full'>
      <Button label="Check Status" handleClick={() => {}} />
      </Link>
    </div>
  )
}

export default Status
