"use client";

import React from 'react'
import Sallad from '@/components/ui/Sallad';
import Phone from '@/assets/icons/Phone';
import Email from '@/assets/icons/Email';
import Clock from '@/assets/icons/Clock';
import Form from './Form';

import spices from "@/assets/food/spices.png";
import Image from 'next/image';
import Socials from '@/assets/icons/Socials';


const page = () => {
    return (
        <section>
            <Sallad />
            <div className="flex flex-col gap-2 sm:gap-4">
                <h4 className='sm:text-xl text-base mt-5 sm:mt-10 '>
                    Got a question, feedback, or just craving the taste of <span className='text-primary capitalize'>desi thali</span>, We&rsquo;re here for you! Feel free to reach out to us using any of the following methods:
                </h4>
                <div className="sm:text-lg text-base">
                    <p className='flex flex-row gap-5 my-2 items-center'>
                        <span className='rounded-full p-1 hover:bg-black text-white bg-primary'><Phone /></span>
                        Phone: +91 123 567 8901
                    </p>
                    <p className='flex flex-row gap-5 my-2 items-center'>
                        <span className='hover:bg-black bg-primary text-white rounded-full p-1'><Email /></span>
                        Email: deluxedhaba@gmail.com
                    </p>
                    <p className='flex flex-row gap-5 my-2 items-center'>
                        <span className='hover:bg-black bg-primary text-white rounded-full p-1'><Clock /></span>
                        Visiting hours: Monday to Sunday [9:00AM - 8:00PM]
                    </p>
                    <div className="w-auto h-auto">
                        <p className='text-sm sm:text-lg mb-2'>Follow us on:</p>
                        <Socials />
                    </div>
                </div>
                <div className="w-auto h-auto">
                    <p className='sm:text-lg text-base'>
                        Or, fill the form given below and our team will get back to you:
                    </p>
                    <div className="flex flex-row justify-between items-center">
                        <div className="sm:w-1/2 mx-auto bg-primary/30 rounded-3xl px-4 sm:px-6 py-2 sm:py-3 my-3 sm:my-5 ">
                            <Form />
                        </div>
                        <Image src={spices} alt='vegetables' className='-z-10 w-1/2 float hidden sm:block' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default page