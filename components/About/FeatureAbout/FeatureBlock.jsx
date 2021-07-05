import React from 'react'

const FeatureBlock = ({ title, description, icon }) => {
    return (
        <div className='p-0.5'>
            <div className="h-20 p-5  border rounded-full border-gray-200 w-20 flex justify-center items-center overflow-hidden">
                <img src={icon} alt='icon' className='h-10  w-10 cover' />
            </div>
            <p className="my-4 font-primary text-xl md:text-2xl text-gray-800 capitalize font-semibold">{title}</p>
            <p className="text-gray-500 font-primary text-sm lg:text-sm font-normal">{description}</p>
        </div>
    )
}

export default FeatureBlock
