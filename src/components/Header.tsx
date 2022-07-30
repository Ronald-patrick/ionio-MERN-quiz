import React from 'react'
import { LoginIcon } from '@heroicons/react/outline'
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className='h-[70px] bg-white shadow-md flex justify-between items-center px-4'>
      <div className='flex justify-center items-center'>
        <h1 className='font-bold text-xl'>Ionio Quiz</h1>
        <img src="logo.png" alt="Logo" className='ml-10' />
      </div>
          
          <div className='flex justify-center items-center'>
            <LoginIcon className='w-6 h-6'/>
            <Link to="/login" className='text-coolgray2 text-md ml-2'>Login/Register</Link>
          </div>
          
    </div>
  )
}

export default Header