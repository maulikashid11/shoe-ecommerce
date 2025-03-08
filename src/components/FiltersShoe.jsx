import React, { useContext, useEffect } from 'react'
import { FilterContext } from '../contexts/FilterContext'

export default function FiltersShoe() {
    const { setCategoryQuery, setPriceQuery } = useContext(FilterContext)
    
    return (
        <section className='filter-section text-xs pr-2 min-h-[80vh] min-w-[7rem] mx-5 border-r-1 border-gray-200'>
            <div className="category-container flex flex-col py-3">
                <h2 className='pb-2'>Category</h2>
                <div id="all">
                    <input type="radio" onChange={(e) => setCategoryQuery(e.target.value)} name='category' id='All' value="" /> <label htmlFor="All">All</label>
                </div>
                <div id="running">
                    <input type="radio" onChange={(e) => setCategoryQuery(e.target.value)} name='category' id='Running' value="Running" /> <label htmlFor="Running">Running</label>
                </div>
                <div id="football">
                    <input type="radio" onChange={(e) => setCategoryQuery(e.target.value)} name='category' id='Football' value="Football" /> <label htmlFor="Football">Football</label>
                </div>
                <div id="casual">
                    <input type="radio" onChange={(e) => setCategoryQuery(e.target.value)} name='category' id='Casual' value="Casual" /> <label htmlFor="Casual">Casual</label>
                </div>
            </div>
            <div className="Price-container flex flex-col py-3">
                <h2 className='pb-2'>Price</h2>
                <div id="all">
                    <input type="radio" onChange={(e) => setPriceQuery(e.target.value)} name='price' id='Allp' value="" /> <label htmlFor="Allp">All</label>
                </div>
                <div id="50">
                    <input type="radio" onChange={(e) => setPriceQuery(e.target.value)} name='price' id='fifty' value="50" /> <label htmlFor="fifty">$0 - $50</label>
                </div>
                <div id="100">
                    <input type="radio" onChange={(e) => setPriceQuery(e.target.value)} name='price' id='hundred' value="100" /> <label htmlFor="hundred">$50 - $100</label>
                </div>
                <div id="150">
                    <input type="radio" onChange={(e) => setPriceQuery(e.target.value)} name='price' id='onefive' value="150" /> <label htmlFor="onefive">$100 - $150</label>
                </div>
                <div id="200">
                    <input type="radio" onChange={(e) => setPriceQuery(e.target.value)} name='price' id='two' value="200" /> <label htmlFor="two">Over $150</label>
                </div>
            </div>
        </section>
    )
}
