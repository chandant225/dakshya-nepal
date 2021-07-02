import React from 'react'
import Benefit from './Benefit'
import {data as benefits} from './BenefitData'

const BenefitSection = () => {
    return (
        <div className='pt-[91px] container mx-auto  grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5'>
            {benefits.map((data, index) => (
                <Benefit
                    title={data.title}
                    benefits={data.benefits}
                    image={data.image}
                    key={index} 
                />
            ))}
        </div>
    )
}

export default BenefitSection
