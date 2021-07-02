import React from 'react'
import BenefitSection from '../components/About/BenefitSection/BenefitSection'
import CtaBox from '../components/About/CtaBox/CtaBox'
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
            <CtaBox />
        </div>
    )
}

export default About
