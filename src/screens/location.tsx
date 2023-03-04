import React from 'react'
import Button from '../components/button'
import { Link } from 'react-router-dom'
import TextInput from '../components/textinput'

const Location = () => {
  const [value, setValue] = React.useState('');
  return (
    <div className='w-full h-screen flex flex-col  px-6 pt-12'>
      <h5 className=' font-semibold text-1xl mb-3'>Choose Polling Unit</h5>
      <TextInput value={value} handleChange={(e) => setValue(e)} placeholder='Select Location' />
      <h5 className=' font-semibold text-1xl mb-3'>Choose PVC collection centre</h5>
      <TextInput value={value} handleChange={(e) => setValue(e)} placeholder='Select Location' />
      <Link to={`/success`} className='w-full'>
      <Button label="Submit →" handleClick={() => {}} />
      </Link>
    </div>
  )
}

export default Location
