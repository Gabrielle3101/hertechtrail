import React from 'react'

interface IProps {
    handleClick: () => void;
    label: string;
}

const Button = ({ handleClick, label }: IProps) => {
  return (
    <button onClick={handleClick} className='w-full h-12 rounded-md mx-5 absolute bottom-10 left-0 bg-green-600 text-white'>
        {label}
    </button>
  )
}

export default Button
