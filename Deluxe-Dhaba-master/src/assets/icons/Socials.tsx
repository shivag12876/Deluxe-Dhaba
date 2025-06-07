"use client";

import React from 'react'
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import Link from 'next/link';

const Socials = () => {
    return (
        <div className='flex flex-row items-center gap-5 text-primary text-2xl sm:text-4xl w-full'>

            <Link className='hover:text-black' target='_blank' href='https://www.facebook.com'><FaFacebook /></Link>
            <Link className='hover:text-black' target='_blank' href='https://www.twitter.com'><FaTwitter /></Link>
            <Link className='hover:text-black' target='_blank' href='https://www.instagram.com'><BsInstagram /></Link>

        </div>
    )
}

export default Socials