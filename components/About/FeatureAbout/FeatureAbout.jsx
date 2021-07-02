import React from 'react'
import FeatureBlock from './FeatureBlock'
import {features} from './aboutFeature'

const FeatureAbout = () => {
    return (
        <div className='  pt-[20px] container mx-auto'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-24 md:gap-y-24">
                {features.map((data, index) => {
                    return (
                        <FeatureBlock
                        title={data.title}
                        description={data.description}
                        icon={data.icon}
                        key={index} 
                    />
                    )
                    })}
            </div>
        </div>
    )
}

export default FeatureAbout

