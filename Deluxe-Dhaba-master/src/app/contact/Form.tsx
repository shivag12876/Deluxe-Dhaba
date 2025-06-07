"use client";

import React from 'react'

const Form = () => {
    return (
        <form onSubmit={() => console.log('submitted')} className='flex flex-col justify-start sm:text-base text-xs' >
            <label htmlFor="name" className='mt-2'>Name</label>
            <input type="text" name='name' className='p-1 my-1 rounded-lg' />
            
            <label htmlFor="email" className='mt-2'>Email Address</label>
            <input type="email" name='email' className='p-1 my-1 rounded-lg' />

            <label htmlFor="phone" className='mt-2'>Phone Number</label>
            <input type="text" name='phone' className='p-1 my-1 rounded-lg' />

            <button type="submit" className='bg-primary hover:bg-black my-2 px-4 py-2 w-min text-white rounded-full text-center'>Submit</button>
        </form>
    )
}

export default Form