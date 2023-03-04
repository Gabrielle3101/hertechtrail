import React from 'react'
import Button from '../components/button'
import { Link } from 'react-router-dom'
import TextInput from '../components/textinput'

const Home = () => {
  const [value, setValue] = React.useState('');
  return (
    <div className='w-full h-screen flex flex-col  px-6 pt-12'>
      <h3 className=' font-bold text-2xl mb-5'>Register</h3>
      <h5 className=' font-semibold text-1xl mb-3'>Choose an ID and enter number</h5>
      <TextInput value={value} handleChange={(e) => setValue(e)} placeholder='Choose ID type' />
      <TextInput value={value} handleChange={(e) => setValue(e)} placeholder='Enter ID No.' />
      <Link to={`/auth`} className='w-full'>
      <Button label="Proceed" handleClick={() => {}} />
      </Link>
    </div>
  )
}

export default Home
