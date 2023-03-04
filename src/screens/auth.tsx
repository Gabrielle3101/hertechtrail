import React from 'react'
import Button from '../components/button'
import { Link } from 'react-router-dom'
import TextInput from '../components/textinput'

const Auth = () => {
  const [value, setValue] = React.useState('');
  return (
    <div className='w-full h-screen flex flex-col  px-6 pt-12'>
      <h3 className=' font-bold text-2xl mb-5'>Verify Your Identity</h3>
      <h5 className=' font-semibold text-1xl mb-3'>Enter the Phone No. linked to your BVN</h5>
      <TextInput value={value} handleChange={(e) => setValue(e)} placeholder='Enter Phone No.' />
      <h5 className=' font-semibold text-1xl mb-3'>Enter Your Mother’s Maiden Name</h5>
      <TextInput value={value} handleChange={(e) => setValue(e)} placeholder='Enter Name' />
      <Link to={`/verify`} className='w-full'>
      <Button label="Verify Me" handleClick={() => {}} />
      </Link>
    </div>
  )
}

export default Auth
