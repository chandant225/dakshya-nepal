import React from 'react'
import DropDown from './DropDown';
import DropDownSkeleton from './DropDownSkeleton';

const CareerDropdown = ({ data, loading }) => {
    return (
        <div className='mt-[90px] lg:mt-[58px] container mx-auto '>
            <p className="font-medium font-primary text-2xl md:text-3xl " >Open Careers @ Dakshya Nepal</p>
            <div className="pt-[40px]">
            {loading ? (
                <DropDownSkeleton />
            ) :(
                data.map((data, index) => (
                    <DropDown keyy={index} info={data} key={index} />
                ))
            )}
            </div>
        </div>
    )
}

export default CareerDropdown
