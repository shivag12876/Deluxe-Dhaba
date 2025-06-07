"use client";

import Image, { StaticImageData } from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

interface img {
    img: StaticImageData
}

const MenuCard: React.FC<img> = ({ img }) => {
    return (
        <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-max h-auto rounded-xl p-3 border  ">
                <CardItem translateZ="100" className="w-full mt-4">
                    <Image
                        src={img}
                        height="1000"
                        width="1000"
                        className="sm:h-[32rem] h-[22rem] w-full object-cover rounded-xl group-hover/card:shadow-xl"
                        alt="thumbnail"
                    />
                </CardItem>
            </CardBody>
        </CardContainer>
    );
}

export default MenuCard;
