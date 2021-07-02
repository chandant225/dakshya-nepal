import React from 'react'
import BenefitSection from '../components/About/BenefitSection/BenefitSection'
import FeatureAbout from '../components/About/FeatureAbout/FeatureAbout'
import Teams from '../components/About/Team'
import VerticalText from '../components/About/VerticalText/VerticalText'

const About = () => {
    return (
        <div className=''>
            <VerticalText />
            <FeatureAbout />
            <BenefitSection />
            <Teams />
        </div>
    )
}

export default About
