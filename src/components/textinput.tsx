import React from 'react'

interface IProps {
    value: string;
    required: true;
    placeholder?: string;
    handleChange: (e: string) => void;
}

const TextInput = ({ value, required, placeholder = 'Enter text', handleChange }: IProps) => {
  return (
    <input onChange={(e) => handleChange(e.target.value)} value={value} required={required} placeholder={placeholder} className='w-full break-normal h-12 rounded-md border-1 border-gray-200 px-2 mb-4 bg-gray-100' />
  )
}

export default TextInput
