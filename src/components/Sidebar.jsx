import React from 'react'
import {  FaSearch, FaChartBar,  } from 'react-icons/fa'
import { IoSettingsOutline } from "react-icons/io5";
import { CiGrid42, CiMail  } from "react-icons/ci";
import { SiSimpleanalytics } from "react-icons/si";


export const Sidebar = ({sidebarToggle}) => {
  return (
    <div className={`${sidebarToggle ? " hidden " : " block " } w-64 bg-white fixed h-full px-4 py-2`}>
        <div className='my-2 mb-4'>
            <h1 className='text-xl text-black font-bold'><SiSimpleanalytics className='inline-block w-5 h-5 mr-2 -mt-2 text-orange-500'></SiSimpleanalytics>ELT Global</h1>
        </div>
        <hr className='text-gray-300'/>

        <ul className='mt-3 font-bold'>
            <li className='group mb-2 text-sm lg:text-lg rounded hover:shadow bg-orange-400 py-2 text-white'>
                <a href="" className='px-3 group-hover:text-white'> <CiGrid42 className='inline-block w-5 h-5 mr-2 -mt-2 text-white'></CiGrid42 >Dashboard</a>
            </li>
            <li className='group mb-2 text-sm lg:text-lg rounded hover:shadow hover:bg-orange-400 py-2 hover:text-white'>
                <a href="" className='px-3 group-hover:text-white'> <FaSearch  className='inline-block w-5 h-5 mr-2 -mt-2 text-orange-400 group-hover:text-white'></FaSearch>Find</a>
            </li>
            <li className=' group text-sm mb-2 lg:text-lg  rounded hover:shadow hover:bg-orange-400 py-2 hover:text-white'>
                <a href="" className='px-3 group-hover:text-white"'> <CiMail className='inline-block w-5 h-5 mr-2 -mt-2 text-orange-400 group-hover:text-white'></CiMail>Inbox</a>
            </li>
            <li className='group mb-2 text-sm lg:text-lg rounded hover:shadow hover:bg-orange-400 py-2 hover:text-white'>
                <a href="" className='px-3 group-hover:text-white'> <FaChartBar className='inline-block w-5 h-5 mr-2 -mt-2 text-orange-400 group-hover:text-white'></FaChartBar>Analytics</a>
            </li>
            <li className='group mb-2 text-sm lg:text-lg  rounded hover:shadow hover:bg-orange-400 py-2 hover:text-white'>
                <a href="" className='px-3 group-hover:text-white'> <IoSettingsOutline className='inline-block w-5 h-5 mr-2 -mt-2 text-orange-400 group-hover:text-white'></IoSettingsOutline>Settings</a>
            </li>
          
        </ul>
    </div>
  )
}
