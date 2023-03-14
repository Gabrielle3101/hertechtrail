import React from 'react'
import Button2 from '../components/button2'
import { Link } from 'react-router-dom'
import TextInput from '../components/textinput'

const Otp = () => {
  const [value, setValue] = React.useState('');
  return (
    <div className='w-full h-screen flex flex-col  px-6 pt-12'>
      <h3 className=' font-bold text-2xl mb-5'>Verification</h3>
      <h5 className=' font-semibold text-1xl mb-3'>Enter OTP sent to your number</h5>
      <TextInput min='1' max='30' value={value} handleChange={(e) => setValue(e)} placeholder='Enter OTP' />
      <Link to={`/confirm`} className='w-full'>
      <Button2 label="Submit" handleClick={() => {}} />
      </Link>
    </div>
  )
}

export default Otp
