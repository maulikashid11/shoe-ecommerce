import React, { useContext } from 'react'
import { FaCartArrowDown, FaRegHeart, FaRegUser } from "react-icons/fa";
import { FilterContext } from '../contexts/FilterContext';

export default function Navbar() {
  const {searchQuery,setSearchQuery} = useContext(FilterContext)
  return (
    <nav className='flex flex-col sm:flex-row gap-4 justify-between sm:items-center p-3 mx-5 border-b-1 border-gray-200'>
        <h1 className="logo text-lg font-bold">SHOETIP</h1>
        <input value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value.toLowerCase())} type="text" id="search" className='bg-gray-200 rounded-sm p-2 text-xs outline-0' placeholder='Search shoe...'/>
        <ul className='flex gap-3'>
            <li><FaRegHeart /></li>
            <li><FaCartArrowDown /></li>
            <li><FaRegUser /></li>
        </ul>
    </nav>
  )
}
