import React from 'react'
import { BsCart2 } from 'react-icons/bs'
import { Link } from 'react-router-dom'

export default function ShoeCard({ shoeData }) {
    return (
        <Link to={`/${shoeData.name}`} state={shoeData} className="shoe w-[10rem] hover:scale-[1.03] transition-all duration-200 h-[15rem] border-1 rounded-sm border-gray-300 p-3">
            <img src={shoeData.imageURL} className='h-[60%] w-full' alt="" />
            <h2 className="name font-bold text-[10px] h-6 my-1">{shoeData.name}</h2>
            <div className="ratings-brand flex justify-between items-center my-2">
                <p className="ratings text-yellow-400">★★★★</p>
                <p className="brand text-gray-500 text-xs">{shoeData.brand}</p>
            </div>
            <div className="price-cart flex justify-between items-center">
                <p className="price text-xs font-bold">${shoeData.price}</p>
                <BsCart2 className='text-md cursor' />
            </div>
        </Link>
    )
}
