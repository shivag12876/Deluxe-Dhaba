"use client";

import React from 'react'
import SectionHeader from './ui/SectionHeader';

const faqs = [
    {
        id: 1,
        question: "What are your opening hours?",
        answer: "We are open from 11:00 AM to 10:00 PM every day of the week."
    },
    {
        id: 2,
        question: "Do you offer vegetarian options?",
        answer: "Yes, we have a wide range of delicious vegetarian dishes to choose from."
    },
    {
        id: 3,
        question: "Do you provide catering services for events?",
        answer: "Yes, we offer catering services for various events. Please contact us for more details and to discuss your requirements."
    },
    {
        id: 4,
        question: "Is it possible to make reservations?",
        answer: "Yes, we accept reservations for both small and large groups. Please call us or use our online reservation system to book a table."
    }
];

const FAQ = () => {
    return (
        <section className='text-center'>
            <SectionHeader
                SubHeader={"Frequently asked questions"}
                MainHeader={""}
            />
            <div className="grid grid-cols-2 gap-3 sm:gap-6 mt-5 sm:mt-10">
                {
                    faqs.map((faq) => (
                        <div key={faq.id} className='bg-gray-200 p-1 sm:p-4 rounded-xl text-center hover:bg-white transition-all hover:shadow-2xl hover:shadow-black/50'>
                            <h4 className='font-medium my-1 sm:my-3 text-sm sm:text-xl'>
                                {faq.question}
                            </h4>
                            <hr className='h-px bg-black/80 rounded-full w-11/12 my-1 mx-auto' />
                            <p className='text-gray-700 text-xs sm:text-sm pt-1'>
                                {faq.answer}
                            </p>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default FAQ