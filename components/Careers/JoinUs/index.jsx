import React from 'react'
import { data as JoinUsData } from './JoinUsData'
import Join_Us from './Join_Us'

const JoinUs = () => {
    return (
        <div className='container mx-auto pt-[28px] lg:pt-[34px]'>
            <p className=" text-gray-900 font-primary font-medium" style={{ fontSize:'34px', lineHeight:'40px' }}>Careers</p>
            <div className="pt-[24px] grid grid-cols-1 gap-[24px]">
                {JoinUsData.map((data, index) => (
                    <Join_Us data={data} key={index} />
                ))}
            </div>
        </div>
    )
}

export default JoinUs
