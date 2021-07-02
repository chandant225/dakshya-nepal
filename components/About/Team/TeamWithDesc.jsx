import React from 'react'
import Link from 'next/link'

const TeamWithDesc = ({ member }) => {
    return (
        <div>
        <div className='flex items-center pb-[20px]'>
        <img src={member.Image.path} alt="" className='rounded-md h-[145px]  w-[140px] cover overflow-hidden' />
        <div className="flex font-primary flex-col ml-[17px]" style={{ justifyContent:'space-between !important' }}>
            <h1 className="text-lg font-medium">{member.Name}</h1>
            <p className="text-base text-gray-400 mt-0.5">{member.Designation}</p>
            <div className="flex mt-0.5">
                <Link className='cursor-pointer' href={member.LinkedIn}>
                    <img src="/icons/Linkedin.svg" alt="" className='cursor-pointer' />
                </Link>
                <Link className='cursor-pointer' href={member.Email} style={{ paddingLeft: '10px !important' }}>
                    <img src="/icons/E-mail.svg" alt="" className='pl-2 cursor-pointer' />
                </Link>
            </div>
        </div>
        </div>
            <p className="text-sm font-primary text-gray-400">{member.desc}</p>
        </div>
    )
}

export default TeamWithDesc
