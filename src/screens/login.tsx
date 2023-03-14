import React from 'react'
import Button2 from '../components/button2'
import { Link } from 'react-router-dom'
import TextInput from '../components/textinput'

const Login = () => {
  const [value, setValue] = React.useState('');
  return (
    <div className='w-full h-screen flex flex-col  px-6 pt-12'>
      <h3 className=' font-bold text-2xl mb-5'>Log in</h3>
      <h5 className=' font-semibold text-1xl mb-3'>Email</h5>
      <TextInput min='1' max='30' value={value} handleChange={(e) => setValue(e)} placeholder='Enter your email address' />
      <h5 className=' font-semibold text-1xl mb-3'>Password</h5>
      <TextInput min='1' max='30' value={value} handleChange={(e) => setValue(e)} placeholder='Enter your password' />
      <Link to={`/verify2`} className='w-full'>
      <Button2 label="Log in" handleClick={() => {}} />
      </Link>
      <p className='font-semi-bold text-1xl text-gray-400 m-3'>Don't have an account? <span className='text-black ml-2'>Sign up</span></p>
    </div>
  )
}

export default Login
