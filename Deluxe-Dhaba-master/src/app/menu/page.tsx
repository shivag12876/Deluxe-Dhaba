"use client";

import React from 'react'
import menuData from '@/assets/data/fullMenu.json';
import MenuItemCard from '@/components/cards/MenuItemCard';
import Sallad from '@/components/ui/Sallad';


interface menuItems {
    id: number,
    title: string,
    description: string,
    price: number,
    image: string
}

const page = () => {
    return (
        <section className='sm:mt-10 mt-5 max-w-screen-md mx-auto text-center'>
            <Sallad />
            <h1 className='text-black font-semibold text-2xl sm:text-4xl tracking-wider'>Menu</h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 mt-4 w-full gap-4">
                {
                    menuData.menuItems.map((menuItem: menuItems) => (
                        <MenuItemCard
                            key={menuItem.id}
                            title={menuItem.title}
                            description={menuItem.description}
                            price={menuItem.price}
                            image={menuItem.image}
                        />
                    ))
                }
            </div>
        </section>
    )
}

export default page