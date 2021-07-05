import React from 'react'

const DropDownSkeleton = () => {
    return (
        <div>
            <div className=" rounded-xl w-full mx-auto mb-[40px]">
                <div className=" animate-pulse bg-gray-100 h-20"/>
            </div>
            
            <div className=" rounded-md  w-full mx-auto mb-[40px]">
                <div className=" animate-pulse bg-gray-100 h-20"/>
            </div>
            
            <div className=" rounded-md w-full mx-auto mb-[40px]">
                <div className=" animate-pulse bg-gray-100 h-20"/>
            </div>
        </div>
    )
}

export default DropDownSkeleton
