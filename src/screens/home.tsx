import React from 'react'
import Button from '../components/button'
import { Link } from 'react-router-dom'
import TextInput from '../components/textinput'

const Home = () => {
  const [value, setValue] = React.useState('');
  return (
    <div className='w-full h-screen flex flex-col  px-6 pt-12'>
      <h5 className=' font-semibold text-2xl mb-5'>Register</h5>
      <h3 className=' font-semibold text-2xl mb-5'>Choose an ID and enter number</h3>
      <TextInput value={value} handleChange={(e) => setValue(e)} placeholder='Choose ID type' />
      <TextInput value={value} handleChange={(e) => setValue(e)} placeholder='Enter ID No.' />
      <Link to={`/auth`} className='w-full'>
      <Button label="vote" handleClick={() => {}} />
      </Link>
    </div>
  )
}

export default Home
