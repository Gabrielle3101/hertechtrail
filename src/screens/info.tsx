import React from 'react'
import Button from '../components/button'
import { Link } from 'react-router-dom'
import TextInput from '../components/textinput'
import imageToAdd from "../assets/jane.png";

const Info = () => {
  const [value, setValue] = React.useState('');
  return (
    <div className='w-full h-screen flex items-center flex-col  px-6 pt-12'>
      <h3 className=' font-bold text-2xl mb-5'>Confirm your personal Information</h3>      
      <img className='mb-4' src={imageToAdd} alt="Image" />
      <TextInput value={value} handleChange={(e) => setValue(e)} placeholder='Jane Anna Doe' />
      <TextInput value={value} handleChange={(e) => setValue(e)} placeholder='12-12-1992' />
      <TextInput value={value} handleChange={(e) => setValue(e)} placeholder='080-000-000-00' />
      <TextInput value={value} handleChange={(e) => setValue(e)} placeholder='Rivers State' />
      <TextInput value={value} handleChange={(e) => setValue(e)} placeholder='Obio-Akpor' />
      <TextInput value={value} handleChange={(e) => setValue(e)} placeholder='Port-Harcourt' />
      <Link to={`/location`} className='w-full'>
      <Button label="Confirm →" handleClick={() => {}} />
      </Link>
    </div>
  )
}

export default Info
