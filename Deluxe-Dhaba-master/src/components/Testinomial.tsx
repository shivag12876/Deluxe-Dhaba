"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import SectionHeader from './ui/SectionHeader';
import { FaStar } from "react-icons/fa";
import Sallad from "./ui/Sallad";

const testimonials = [
    {
        "quote": "The food at Deluxe Dhaba is simply outstanding! Every dish bursts with flavor and authenticity. Highly recommended!",
        "name": "Samantha Patel",
        "title": "Food Critic"
    },
    {
        "quote": "As an Indian food enthusiast, I can confidently say that Deluxe Dhaba serves some of the best Indian cuisine I've ever tasted outside of India.",
        "name": "Rajesh Kumar",
        "title": "Indian Cuisine Connoisseur"
    },
    {
        "quote": "I hosted a family dinner at Deluxe Dhaba, and everyone was blown away by the quality of the food and the warmth of the service. Truly exceptional!",
        "name": "Emily Johnson",
        "title": "Happy Customer"
    },
    {
        "quote": "Being a vegetarian, I'm always on the lookout for restaurants with great veg options. Deluxe Dhaba exceeded my expectations with their flavorful vegetarian dishes!",
        "name": "Amita Rao",
        "title": "Vegetarian Food Enthusiast"
    },
    {
        "quote": "I recently celebrated my birthday at Deluxe Dhaba, and it was an unforgettable experience. The food, ambiance, and service were all top-notch. Thank you for making my day special!",
        "name": "Michael Smith",
        "title": "Satisfied Patron"
    }
];

const Testinomial = () => {
    return (
        <section className='text-center mt-5 sm:mt-14'>
            <SectionHeader
                MainHeader={"Testinomials"}
                SubHeader={"know what our customers say"}
            />
            <Sallad />
            <div className="flex flex-row justify-center items-center gap-1 text-yellow-400/95 text-2xl text-center">
                <FaStar />
                <span className="text-3xl"><FaStar /></span>
                <FaStar />
            </div>
            <div className="h-[30rem] -mt-10 rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
                <InfiniteMovingCards
                    items={testimonials}
                    direction="right"
                    speed="slow"
                />
            </div>
        </section>
    )
}

export default Testinomial