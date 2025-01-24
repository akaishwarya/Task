import React from 'react'
import { FaBars, FaBell, FaUserCircle } from 'react-icons/fa'
import { FaHeadset } from "react-icons/fa6";

export const Navbar = ({sidebarToggle, setSidebarToggle}) => {
  return (
   <nav className='bg-white px-4 py-3 '>
<div className='flex justify-between'>
<div className='flex items-center text-xl'>
            <FaBars className='text-black me-4 cursor-pointer' onClick={() => setSidebarToggle(!sidebarToggle)}/>
            <span className='text-black font-semibold'>Exam</span>
    </div>
    <div className='flex items-center gap-x-5'>
                 <div className='text-gray-500'>
                   <FaBell className='w-6 h-6' ></FaBell>
                    </div>
                    <div className='text-gray-500'>
                    <FaHeadset className='w-6 h-6' />
                    </div>
                    <div className='text-gray-500'>
                            <FaUserCircle className='w-6 h-6 mt-1' />
                    </div>
                  
                    
                   
                    
    </div>
</div>
 <div className='mt-4'>
    <ul className='flex gap-4 '>
        <li className='border-b-3 border-orange-500 rounded-b-3'>Exam</li>
        <li>Lorem</li>
        <li>Lorem</li>
        <li>Lorem</li>
    </ul>
 </div>
   </nav>
    
  )
}
