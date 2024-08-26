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
const page = (props: Props) => {
    return (
        <main>
            <h2>Experience</h2>
            {/* {experience.map(e => (<div key={e} >
                <Experience xp={e} />
            </div>)
            )} */}
            <Circle />
            <Line />
        </main>
    )
}
const Experience = (props: Props) => {

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