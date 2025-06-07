"use client";

import React from 'react'
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import Link from 'next/link';


const Footer = () => {
    return (
        <footer className=' bg-black/85 text-white  rounded-ss-xl rounded-se-xl sm:mt-10 mt-5'>
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 py-2 sm:px-6 lg:px-8">
                <div>
                    <h2 className="text-white text-lg font-medium mb-4">About Us</h2>
                    <p className="mb-4 text-left">
                        Deluxe Dhaba is not just a restaurant; it&rsquo;s an experience crafted to tantalize your taste buds and transport you to the heart of India&rsquo;s vibrant culinary culture.
                    </p>
                </div>
                <div>
                    <h2 className="text-white text-lg font-medium mb-4">Quick Links</h2>
                    <ul>
                        <li>
                            <a
                                href="/"
                                className="hover:text-primary transition-colors duration-300"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="/about"
                                className="hover:text-primary transition-colors duration-300"
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="/menu"
                                className="hover:text-primary transition-colors duration-300"
                            >
                                Menu
                            </a>
                        </li>
                        <li>
                            <a
                                href="/contact"
                                className="hover:text-primary transition-colors duration-300"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-white text-lg font-medium mb-4">Follow Us</h2>
                    <div className="flex space-x-4 text-2xl">
                        <Link className='hover:text-primary' target='_blank' href='https://www.facebook.com'><FaFacebook /></Link>
                        <Link className='hover:text-primary' target='_blank' href='https://www.twitter.com'><FaTwitter /></Link>
                        <Link className='hover:text-primary' target='_blank' href='https://www.instagram.com'><BsInstagram /></Link>

                    </div>
                </div>
                <div>
                    <h2 className="text-white text-lg font-medium mb-4">Contact Us</h2>
                    <p>New Delhi, India</p>
                    <p>Delhi 10001</p>
                    <p>Email: info@dd.com</p>
                    <p>Phone: (+91) 123 456 7890</p>
                </div>
            </div>
            <p className="text-center text-sm pt-8 pb-2 text-white underline underline-offset-2">© 2024 Deluxe Dhaba. All rights reserved.</p>
        </footer>
    )
}

export default Footer