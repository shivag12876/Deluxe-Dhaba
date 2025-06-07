"use client";

import React from 'react'
import SectionHeader from './ui/SectionHeader';
import chefData from '@/assets/data/chefData.json';
import ChefCard from './cards/ChefCard';
import Sallad from './ui/Sallad';


interface chef {
    name: string,
    specialty: string,
    bio: string
};


const Team = () => {
    return (
        <section className='text-center my-16 justify-center flex flex-col items-center w-full h-full'>
            <SectionHeader
                SubHeader={"Meet our expert team"}
                MainHeader={"Our Chefs"}
            />
            <div className="hidden sm:block">
                <Sallad/>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 mt-5">
                {
                    chefData.chefs.map((chef: chef) => (
                        <ChefCard
                            key={chef.name}
                            name={chef.name}
                            specialty={chef.specialty}
                            bio={chef.bio}
                        />

                    ))
                }
            </div>
        </section>
    )
}

export default Team