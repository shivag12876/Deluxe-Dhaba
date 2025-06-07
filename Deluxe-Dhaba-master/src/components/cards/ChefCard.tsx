"use client";

import Image from 'next/image';
import React from 'react'

import chef1 from "@/assets/chef2.png"

interface chef {
    name: string,
    specialty: string,
    bio: string
};

const ChefCard: React.FC<chef> = ({ name, specialty, bio }) => {
    return (
        <div className='bg-black/90 p-1 sm:p-2 rounded-xl text-center flex flex-col justify-center items-center hover:bg-primary/90 transition-all hover:shadow-2xl hover:shadow-primary/90'>
            <Image src={chef1} alt='chef' className='max-h-24 max-w-24 mt-2 block mx-auto rounded-full border-2 border-primary ' />
            <h4 className='font-semibold my-1 text-white sm:my-2 text-sm sm:text-xl'>{name}</h4>
            <p className='text-gray-200 font-medium text-xs sm:text-sm my-1'>Specialty: {specialty}</p>
            <p className='text-gray-200 font-light text-xs sm:text-sm text-center py-1'>{bio}</p>
        </div>
    )
}

export default ChefCard