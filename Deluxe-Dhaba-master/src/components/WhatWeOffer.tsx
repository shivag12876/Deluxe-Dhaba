"use client";

import React from 'react'
import SectionHeader from './ui/SectionHeader';
import Link from 'next/link';
import DhabaCard from './cards/DhabaCard';
import MenuCard from './cards/MenuCard';

import dhabaMenu from "@/assets/food/dhabaMenu.webp"
import thali3 from "@/assets/food/thali3.jpg";
import pavBhaji from "@/assets/food/pavBhaji.jpg";
import thali2 from "@/assets/food/thali2.jpg";
import dishes from "@/assets/food/dishes.jpg";

const WhatWeOffer = () => {
    return (
        <section className='text-center'>
            <SectionHeader
                MainHeader={"what we offer!!"}
                SubHeader={"checkout our services"}
            />
            <div className="text-black flex flex-col sm:flex-row sm:justify-between items-center sm:mt-10 mt-5">
                <div className="flex flex-col sm:items-center sm:justify-center text-left text-base space-y-2 sm:space-y-6">
                    <p className='sm:w-3/4 text-left'>
                    At<span className='font-medium text-primary'>&nbsp;Deluxe Dhaba</span>, we offer a tantalizing array of authentic Indian dishes meticulously crafted to delight your palate and ignite your senses.
                    </p>
                    <p className='w-3/4 my-1 text-left'>
                        <span className='font-medium'>Tandoori Specialties:</span> Indulge in our sizzling selection of tandoori delights, including tender marinated meats, succulent kebabs, and flavorful naan bread straight from the clay oven.
                    </p>
                    <p className='sm:w-3/4 my-1 text-left'>
                        <span className='font-medium'>Vegetarian Delights:</span> Discover the diversity of vegetarian cuisine with our extensive range of plant-based dishes, showcasing the vibrant flavors of fresh vegetables, lentils, and spices.
                    </p>
                    <p className='sm:w-3/4 my-1 text-left'>
                        <span className='font-medium'>Special Menus:</span> Whether you&rsquo;re celebrating a special occasion or hosting a corporate event, our customizable special menus cater to your specific preferences and dietary requirements.
                        <Link href={"/about"} className='text-primary underline'>
                            (Check our Menu)
                        </Link>
                    </p>
                    <p className='sm:w-3/4 my-1 text-left'>
                        <span className='font-medium'>Street Food Specials:</span> Take a culinary journey through the bustling streets of India with our selection of street food favorites, from crispy samosas and spicy chaats to indulgent dosas and flavorful pav bhaji.
                    </p>
                </div>
                <div className="mt-5 sm:mt-0">
                    <MenuCard img={dhabaMenu} />
                </div>
            </div>
            <div className="grid grid-cols-2 w-full gap-2 sm:mt-10 mt-5">
                <DhabaCard img={thali3} />
                <DhabaCard img={pavBhaji} />
                <DhabaCard img={thali2} />
                <DhabaCard img={dishes} />
            </div>
        </section>
    )
}

export default WhatWeOffer