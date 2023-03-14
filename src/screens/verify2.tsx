import React from 'react'
import Button2 from '../components/button2'
import { Link } from 'react-router-dom'
import imageToAdd from "../assets/msg.png";
import TextInput from '../components/textinput';

const Verify2 = () => {
  const [value, setValue] = React.useState('');
  return (
    <div className='w-full h-screen flex flex-col  items-center px-6 pt-12'>
      <h3 className=' font-bold text-2xl mb-5'>Verify Your Identity</h3>
      <h5 className=' font-semibold text-1xl mb-3'>Enter the 6-digit that was sent to your email address</h5>
      <TextInput value={value} handleChange={(e) => setValue(e)} placeholder=' ' min='6' max='6' />
      <div className='flex w-screen justify-between'>
            <h5 className=' font-semibold text-gray-500 text-1xl mb-3'>OTP not sent? &nbsp; </h5>
            <a className='text-black' href="">Resend</a>
      </div>
      <Link to={`/welcome`} className='w-full'>
      <Button2 label="Proceed →" handleClick={() => {}} />
      </Link>
      <div className='flex flex-col w-screen items-center justify-center'>
            <h5 className=' font-semibold text-gray-500 text-1xl mb-3'>Want to try another method of verification?</h5>
            <a className='text-black text-lg' href="">Click Here</a>
      </div>
    </div>
  )
}

export default Verify2