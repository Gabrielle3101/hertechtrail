import React from 'react'

interface IProps {
    handleClick: () => void;
    label: string;
}

const Button2 = ({ handleClick, label }: IProps) => {
  return (
    <button onClick={handleClick} className='w-5/6 h-12 rounded-md mx-6 bg-green-600 text-white'>
        {label}
    </button>
  )
}

export default Button2