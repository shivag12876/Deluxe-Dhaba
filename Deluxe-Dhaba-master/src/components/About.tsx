"use client";

import React from 'react'
import Link from 'next/link';
import SectionHeader from './ui/SectionHeader'
import AboutImage from './ui/AboutImage';

const About = () => {
    return (
        <section className='text-center my-4 sm:my-8'>
            <div className="flex flex-col sm:flex-row justify-center items-center sm:justify-between gap-4 w-full">
                <div className="float -z-10">
                    <AboutImage />
                </div>
                <div className="text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-6 text-justify">
                    <div className="text-center">
                        <SectionHeader SubHeader={"welcome to deluxe dhaba"} MainHeader={""} />
                    </div>
                    <p>
                        Welcome to our Deluxe Dhaba, where every meal is a journey through the flavors of India! Step into a world of authentic cuisine, where spices dance and aromas enchant. From sizzling tandoori delights to rich curries simmered to perfection, our kitchen is your gateway to a culinary adventure. So sit back, relax, and indulge in the warmth of our hospitality.
                    </p>
                    <p>
                        Deluxe Dhaba is not just a restaurant; it&rsquo;s an experience crafted to tantalize your taste buds and transport you to the heart of India&rsquo;s vibrant culinary culture. Established with a passion for bringing authentic flavors to discerning palates, Deluxe Dhaba has become a cherished destination for food enthusiasts seeking a taste of traditional Indian cuisine with a touch of refinement.
                    </p>
                    <p>
                        Welcome, dear guest, to a feast for your senses!
                    </p>

                    <Link href={"/about"} className='uppercase bg-primary rounded-full px-4 py-2 w-1/3 text-center mx-auto text-white hover:bg-black'>
                        about us
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default About