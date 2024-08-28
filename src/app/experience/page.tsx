import React from 'react'

type duration = {
    start: string;
    end: string;
};
type experience = {
    id: string
    company: string;
    desc: string;
    duration: duration;
    tasks: string[];
    logo?: string;
};
type Props = {}
import { experience } from '@/data/experience'
import TimeLine from '@/components/ui/TimeLine';
import { experienceType } from '@/data/experience';
const page = (props: Props) => {
    return (
        <main className="p-3 md:p-20">
            <div className="flex justify-center mb-8">

                <h2 className="text-4xl font-[600] text-center //mb-6 font-incognito text-soft-white border-b-4 inline-block border-primary-blue ">My Experience</h2>
            </div>            {/* {experience.map(e => (<div key={e} >
                <Experience xp={e} />
            </div>)
            )} */}
            <div>
                <TimeLine xps={experience as experienceType[]} />
            </div>
        </main>
    )
}
const Experience = (props: Props) => {

    return (
        <div>
            <div className='flex '>
                {/* <h2>{props.xp.company}</h2> */}
            </div>
        </div >
    )
}


export default page