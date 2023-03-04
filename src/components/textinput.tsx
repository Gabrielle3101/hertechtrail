import React from 'react'

interface IProps {
    value: string;
    placeholder?: string;
    handleChange: (e: string) => void;
}

const TextInput = ({ value, placeholder = 'Enter text', handleChange }: IProps) => {
  return (
    <input onChange={(e) => handleChange(e.target.value)} value={value} placeholder={placeholder} className='w-full h-12 rounded-md border-1 border-gray-200 px-2 mb-4 bg-gray-100' />
  )
}

export default TextInput
