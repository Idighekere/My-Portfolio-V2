import React from 'react'

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
const page = (props: Props) => {
    return (
        <main className="p-3 md:p-20">
            <div className="flex justify-center mb-8">

                <h2 className="text-4xl font-[600] text-center //mb-6 font-incognito text-soft-white border-b-4 inline-block border-primary-blue ">My Education Level</h2>
            </div>            {/* {experience.map(e => (<div key={e} >
                <Experience xp={e} />
            </div>)
            )} */}
            <div>
                <TimeLine />
                {/* //edu={experience as educationType[]} */}
            </div>
        </main>
    )
}
const Education = (props: Props) => {

    return (
        <div>
            <div className='flex '>
                <Circle />
                {/* <h2>{props.xp.company}</h2> */}
            </div>
        </div >
    )
}

const Circle = () => {

    return (
        <div className="rounded-full bg-white h-3 w-3"></div>
    )
}

const Line = () => {

    return (
        <div className=" bg-white h-10 w-[2px]"></div>
    )
}

export default page