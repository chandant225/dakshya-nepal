import React from 'react'
import Link from 'next/link'

const TeamWithoutDesc = ({ member }) => {
    return (
        <div className='flex items-center pb-[20px]'>
        <img src={process.env.NEXT_PUBLIC_CORE_API_URL + member.Image.path} alt="" className='rounded-md h-[145px] w-[130px] object-cover' />
        <div className="flex flex-col ml-[16px] font-primary " style={{ justifyContent:'space-between !important' }}>
            <h1 className="text-base md:text-lg font-medium">{member.Name}</h1>
            <p className="text-base text-gray-400 mt-0.5">{member.Designation}</p>
            <div className="flex mt-0.5">
                <Link className='cursor-pointer' href={member.LinkedIn}>
                    <img src="/icons/Linkedin.svg" alt="" className='cursor-pointer' />
                </Link>
                <Link className='cursor-pointer' href={member.Email} >
                    <img src="/icons/E-mail.svg" alt="" className='pl-2 cursor-pointer' />
                </Link>
            </div>
        </div>
    </div>
    )
}

export default TeamWithoutDesc
