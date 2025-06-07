"use client";

import Image from "next/image";
import thali from "@/assets/food/thali.png"
import RightArrowIcon from "@/assets/icons/RightArrowIcon";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="hero">
      <div className="py-12">
        <h1 className="sm:text-4xl capitalize text-3xl font-semibold tracking-wide text-center sm:text-left">
          Desi Swaad,<br/>
          <span className="text-primary">
            Dhaba
          </span>
          &nbsp;ki shaan
        </h1>
        <p className="sm:my-6 my-3 text-gray-500 text-sm text-center sm:text-left">
          For the love of delicious food
        </p>
        <div className="flex w-min gap-2 sm:gap-4 text-sm mx-auto sm:mx-0">
          <button className="bg-primary hover:bg-black uppercase sm:text-base text-xs flex items-center gap-2 text-white sm:px-4 sm:py-2 px-2 py-1 rounded-full">
            Order&nbsp;now
            <span className="w-6"><RightArrowIcon /></span>
          </button>
          <Link href={"/about"} className="flex items-center hover:text-black sm:text-base text-xs gap-2 text-gray-600 font-semibold ">
            Learn&nbsp;more
            <span className="w-6"><RightArrowIcon /></span>
          </Link>
        </div>
      </div>
      <div className="relative spin -z-10 ">
        <Image src={thali} alt="thali" layout="fill" objectFit="contain" />
      </div>
    </section>
  );
};

export default Hero;
