import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import FiltersShoe from '../components/FiltersShoe'
import { FilterContext } from '../contexts/FilterContext'
import { Outlet } from 'react-router-dom'



export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [categoryQuery, setCategoryQuery] = useState('')
  const [priceQuery, setPriceQuery] = useState('')



  return (
    <>
      <FilterContext.Provider value={{ searchQuery, setSearchQuery, categoryQuery, setCategoryQuery, priceQuery, setPriceQuery }}>
        <Navbar />
        <main className='flex px-3'>
          <FiltersShoe />
          <Outlet />
        </main>
      </FilterContext.Provider>
    </>
  )
}
