import React from 'react'
import Button from '../components/button'
import { Link } from 'react-router-dom'
import TextInput from '../components/textinput'
import imageToAdd from "../assets/jane.png";

const Lcs = () => {
  const [value, setValue] = React.useState('');
  return (
    <div className='w-full h-screen flex flex-col  px-6 pt-12'>
      <h3 className=' font-bold text-2xl mb-5'>PVC Status</h3>
      <div className="flex justify-center items-center flex-col w-full">
        <img className='mb-4' src={imageToAdd} alt="Image" />
        <h4>Hello, Jane Doe</h4>
        <h3>20-19-02-020</h3>
      </div>
      <h5 className=' font-semibold text-1xl mb-3'>Polling Unit</h5>
      <TextInput value={value} handleChange={(e) => setValue(e)} placeholder='Rd 1 HerTechTrail Street, Port Harcourt, 
Rivers State' />
      <h5 className=' font-semibold text-1xl mb-3'>Collection Centre</h5>
      <TextInput value={value} handleChange={(e) => setValue(e)} placeholder='Rd 1 HerTechTrail Street, Port Harcourt, 
Rivers State' />
        <div className='flex'>
            <h5 className='font-semibold text-gray-500 text-1xl mb-3'>Change collection centre?&nbsp;</h5>
            <a className='text-green-600' href="">Resend</a>
      </div>
      <Link to={`/`} className='w-full'>
      <Button label="Close" handleClick={() => {}} />
      </Link>
    </div>
  )
}

export default Lcs
