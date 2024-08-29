"use client"
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
type duration = {
    start: string;
    end: string;
};
type experience = {
    company: string;
    desc: string;
    duration: duration;
    tasks: string[];
    logo?: string;
};
type Props = {}
import { experience } from '@/data/experience'
import TimeLine from '@/components/ui/TimeLine';
import { educationType } from '@/data/education';
const Education = (props: Props) => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration in milliseconds
            once: false, // Whether animation should happen only once
        });
    }, []);
    return (
        <main className="p-3 md:p-20">
            <div className="flex justify-center mb-8">

                <h2 className="text-4xl font-[600] text-center //mb-6 font-incognito text-soft-white border-b-4 inline-block border-primary-blue ">My Education Level</h2>
            </div>
            <div className="flex flex-col items-center">
                <TimeLine />
                {/* //edu={experience as educationType[]} */}
            </div>
        </main>
    )
}

export default Education