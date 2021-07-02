import React from 'react'
import {data as benefits } from './BenefitData'

const Benefit = ({ title, image, benefits }) => {
    return (
        <div className='flex flex-col'>
            <img src={image} alt='icon' className='h-auto cover' />
            <p className="mt-3 font-primary mb-6 text-xl md:text-2xl text-gray-800 capitalize font-semibold">{title}</p>
            <div className="">
                {benefits.map((data, index) => {
                    return(
                    <p className="text-gray-500 text-sm font-primary" key={index}>{data}</p>
                    )})}
            </div>
        </div>
    )
}

export default Benefit



