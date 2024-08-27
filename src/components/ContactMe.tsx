import React from 'react'

type Props = {}

const ContactMe = (props: Props) => {
    return (
        <div>
            <h2 className="text-3xl font-[600] text-center mb-2 font-incognito text-soft-white">Contact Me</h2>

            <form action="">
                <div className="flex flex-col gap-3 w-full  md:items-center">
                    <input type="text" name="" id="" className="bg-transparent border border-primary-blue rounded-md px-2 py-1 w-full marker:md:w-64 lg:w-96 placeholder:text-soft-white" placeholder="Full Name" required />
                    <input type="mail" name="" id="" className="bg-transparent border border-primary-blue rounded-md px-2 py-1 w-full marker:md:w-64 lg:w-96 placeholder:text-soft-white focus:text-soft-white focus:border-text-soft-white" placeholder="Email Address" required />
                    <input type="text" name="" id="" className="bg-transparent border border-primary-blue rounded-md px-2 py-1 w-full marker:md:w-64 lg:w-96 placeholder:text-soft-white focus:text-soft-white focus:border-text-soft-white" placeholder="Phone Number" />
                    <textarea name="" id="" cols="30" rows="10" className="bg-transparent border border-primary-blue rounded-md px-2 py-1 w-full md:w-64 lg:w-96 placeholder:text-soft-white focus:text-soft-white focus:border-text-soft-white" placeholder="Message"></textarea>
                    <button className="border border-primary-blue bg-primary-blue px-3 py-1 text-soft-white w-full md:w-64 rounded-md lg:w-96 duration-200 hover:bg-transparent hover:border" >Send Message</button>
                </div>
            </form >

        </div >
    )
}

export default ContactMe