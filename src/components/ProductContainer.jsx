import React, { useContext, useEffect, useState } from 'react'
import ShoeCard from './ShoeCard'
import { shoeArr } from '../../data'
import { FilterContext } from '../contexts/FilterContext'

export default function ProductContainer() {
    const { searchQuery, categoryQuery, priceQuery } = useContext(FilterContext)
    const [brandQuery, setBrandQuery] = useState('')

    const comparePrice = (price, priceQuery) => {
        if (priceQuery == '') {
            return true
        }
        else if (priceQuery == 50 && price <= 50) {
            return true
        }
        else if (priceQuery == 100 && (price >= 50 && price <= 100)) {
            return true
        }
        else if (priceQuery == 150 && (price >= 100 && price <= 150)) {
            return true
        }
        else if (priceQuery == 200 && (price >= 150)) {
            return true
        }
        else {
            return false
        }
    }

    useEffect(() => {
        document.querySelector('.hamburger-menu').addEventListener('click', (e) => {
            e.stopPropagation()
            document.querySelector('.filter-section').style.transform = 'translateX(0)'
            document.querySelector('.filter-section').style.display = "block"
        })
        document.body.addEventListener('click', (e) => {
            e.stopPropagation()
            document.querySelector('.filter-section').style.transform = "translateX(150px)"
            document.querySelector('.filter-section').style.display = "none"
        })
    }, [])

    return (
        <section className='products-section px-5'>
            <div className="hamburger flex justify-between items-center">
                <h3 className='font-bold text-xs my-2'>Recommonded</h3>
                <p className="hamburger-menu cursor-pointer border-1 border-gray-400 rounded-full w-6 h-6 flex sm:hidden items-center justify-center">☰</p>
            </div>
            <ul className='flex gap-2'>
                <li value="" onClick={(e) => setBrandQuery('')} className='text-[10px] p-1 border-1 border-gray-400 rounded-sm cursor-pointer'>All Products</li>
                <li value="Nike" onClick={(e) => setBrandQuery(e.target.innerText.toLowerCase())} className='text-[10px] p-1 border-1 border-gray-400 rounded-sm cursor-pointer'>Nike</li>
                <li value="Adidas" onClick={(e) => setBrandQuery(e.target.innerText.toLowerCase())} className='text-[10px] p-1 border-1 border-gray-400 rounded-sm cursor-pointer'>Adidas</li>
                <li value="Vans" onClick={(e) => setBrandQuery(e.target.innerText.toLowerCase())} className='text-[10px] p-1 border-1 border-gray-400 rounded-sm cursor-pointer'>Vans</li>
            </ul>
            <div className="shoes-list  flex flex-wrap items-center justify-center gap-3 p-4 ">
                {

                    shoeArr.filter((item) => item.name.toLowerCase().includes(searchQuery) && item.category.toLowerCase().includes(categoryQuery.toLowerCase()) && comparePrice(item.price, +priceQuery) && item.brand.toLowerCase().includes(brandQuery.toLowerCase())).map((shoeData) => <ShoeCard key={shoeData.id} shoeData={shoeData} />)

                }
            </div>
        </section>
    )
}
