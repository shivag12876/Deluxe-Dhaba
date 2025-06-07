"use client";

import Link from 'next/link';
import React from 'react'
import wcu from '@/assets/data/wcuData.json';

import Sallad from '@/components/ui/Sallad';

interface wcuType {
    title: string,
    description: string
}

const page = () => {
    return (
        <section className='grid grid-cols-1 p-1 md:p-0 gap-6'>
            <Sallad />
            <h1 className='text-black font-semibold md:text-4xl text-2xl tracking-wider text-center mt-10'>
                About Us
            </h1>
            <div className="flex flex-col gap-3 text-justify text-base">
                <p>
                    Deluxe Dhaba is not just a restaurant; it&rsquo;s an experience crafted to tantalize your taste buds and transport you to the heart of India&rsquo;s vibrant culinary culture. Established with a passion for bringing authentic flavors to discerning palates, Deluxe Dhaba has become a cherished destination for food enthusiasts seeking a taste of traditional Indian cuisine with a touch of refinement.
                </p>
                <p>
                    Nestled in a cozy corner, our dhaba embodies the rustic charm of roadside eateries while offering the comfort and elegance of a fine dining establishment. Every dish is a labor of love, prepared by skilled chefs using time-honored recipes passed down through generations. We source the freshest ingredients, handpick aromatic spices, and employ traditional cooking techniques to ensure that each bite is a revelation of taste and texture.
                </p>
                <p>
                    From our signature tandoori specialties, bursting with smoky goodness, to our fragrant biryanis and creamy curries, our menu celebrates the diversity of India&rsquo;s culinary landscape. Whether you&rsquo;re craving the fiery heat of North Indian cuisine or the subtle sophistication of South Indian flavors, Deluxe Dhaba promises a culinary journey like no other.
                </p>
            </div>
            <h1 className='text-gray-700 text-2xl text-center font-semibold'>Why Choose Us</h1>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
                {
                    wcu.wcuData.map((item: wcuType) => (
                        <div key={item.title} className="rounded-xl bg-black/80 hover:bg-black text-amber-600 text-center p-1">
                            <div className="p-2 gap-3 flex flex-col">
                                <h4 className='font-semibold text-base'>{item.title}</h4>
                                <p className='text-sm text-white'>{item.description}</p>
                            </div>
                        </div>
                    ))
                }

            </div>
            <Link href={"/contact"} className='uppercase px-3 py-2 hover:bg-black bg-primary text-white text-center rounded-full md:w-1/6'>contact us</Link>
        </section>
    )
}

export default page