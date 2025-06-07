"use client";

import React from 'react'
import sallad1 from '@/assets/sallad1.png';
import sallad2 from '@/assets/sallad2.png';
import Image from 'next/image';

const Sallad = () => {
    return (
        <div className="absolute left-0 right-0 w-full">
            <div className="absolute left-0 top-40 -z-10 bounce">
                <Image src={sallad1} alt='sallad' width={192} height={192} />
            </div>
            <div className="absolute top-0 right-0 -z-20 bounce">
                <Image src={sallad2} alt='sallad' width={107} height={195} />
            </div>
        </div>
    )
}

export default Sallad