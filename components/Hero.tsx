"use client";

import Image from "next/image"
import { CustomButton } from "."

const Hero = () => {

    const handleScroll = () => { }

    return (
        <div className="hero">
            <div className="flex-1 pt-36 padding-x">
                <h1 className="hero__title">Find, book, rent or buy a car of your dreams.</h1>
                <p className="hero__subtitle">We have a wide range of cars to choose from. You can find a car for any occasion or lifestyle.</p>
                <CustomButton
                    title="Browse Cars"
                    containerStyles="bg-primary-blue text-white rounded-full mt-10"
                    handleClick={handleScroll}

                />
            </div>
            <div className="hero__image-container">
                <div className="hero__image">
                    <Image
                        src="/hero.png"
                        alt="Hero Image"
                        fill
                        className="object-contain"
                    />
                </div>
                <div className="hero__image_overlay" />
            </div>
        </div>
    )
}

export default Hero