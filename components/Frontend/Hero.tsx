import React from "react";
import { ChevronLeft, ChevronRight, Search, HeartPulse, Users, StethoscopeIcon } from "lucide-react";
import Image from "next/image";
import TransitionalText from "./TransitionalText";
import SearchBar from "./SearchBar";

const Hero = () => {
    const TEXTS = ["Nurses", "Carers", "Social Workers"];

    return (
        <div className="bg-sky-50 text-gray-200 h-screen">
            <div className="max-w-7xl mx-auto px-4 py-2 md:py-20">
                <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12">
                    {/* Text Content */}
                    <div className="md:w-1/2 text-center md:text-left">
                      
                        <div className="flex flex-col justify-center">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
                                <div className="flex items-center justify-center md:justify-start">
                                    <span className="text-gray-500 mr-2">Find</span>
                                    <TransitionalText 
                                        className="text-sky-500 mx-2" 
                                        TEXTS={TEXTS} 
                                    />
                                </div>
                                <span className="block text-gray-500 mt-2">across the UK</span>
                            </h1>
                            
                            <p className="text-gray-600 text-base md:text-lg mb-8">
                                Your health, simplified. Find and book appointments with top healthcare workers across the UK.
                            </p>
                            
                            {/* Feature Icons */}
                            <div className="flex justify-center md:justify-start space-x-6 mb-8">
                                <div className="flex flex-col items-center">
                                    <HeartPulse className="text-sky-500 w-10 h-10 mb-2" />
                                    <span className="text-sm  text-gray-900">Caring</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <Users className="text-sky-500 w-10 h-10 mb-2" />
                                    <span className="text-sm  text-gray-900">Professional</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <StethoscopeIcon className="text-sky-500 w-10 h-10 mb-2" />
                                    <span className="text-sm  text-gray-900">Trusted</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Image Content */}
                    <div className="md:w-1/2 relative">
                        <div className="rounded-lg overflow-hidden shadow-2xl transform transition-transform hover:scale-105">
                            <Image
                                className="w-full h-96 "
                                height={500}
                                width={500}
                                src="/hero.jpg"
                                alt="Healthcare professionals"
                            />
                        </div>
                    </div>
                </div>
                
                {/* Search Bar */}
                <div className="mt-12">
                    <SearchBar />
                </div>
            </div>
        </div>
    );
};

export default Hero;