"use client";

import React from 'react'

interface Header {
    SubHeader: String,
    MainHeader: String
}

const SectionHeader: React.FC<Header> = ({ SubHeader, MainHeader }) => {
    return (
        <>
            <h3 className="uppercase text-gray-500 font-semibold leading-4">{SubHeader}</h3>
            <h2 className="text-primary font-bold text-4xl italic mb-1 capitalize">{MainHeader}</h2>
        </>
    )
}

export default SectionHeader