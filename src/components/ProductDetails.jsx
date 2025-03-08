import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { shoeArr } from '../../data'

export default function ProductDetails() {
    let { state } = useLocation()
    const name = useParams().shoe
    if (state == null) {
        state = shoeArr.filter((item) => item.name == name)[0]
    }
    return (
        <section className='product-details  p-15'>
            <button onClick={(e) => { history.back() }} className='font-bold border-1 border-gray-400 rounded-sm p-2 my-4 cursor-pointer '>Back</button>
            {
                state ?
                    <div className="card flex flex-wrap gap-10">
                        <img className=' h-[25rem]' src={state.imageURL} alt="" />
                        <div className="details w-[20rem]">
                            <h1 className='text-3xl my-5'>{state.name}</h1>
                            <p className="brand text-xl my-4">{state.brand}</p>
                            <p className="ratings text-yellow-500 my-3">★★★★</p>
                            <p className="price text-2xl font-bold my-3">${state.price}</p>
                            <button className='font-bold border-1 border-gray-400 rounded-sm p-2 cursor-pointer'>Add to cart</button>
                        </div>
                    </div> : <div>Product not found</div>
            }
        </section>
    )
}
