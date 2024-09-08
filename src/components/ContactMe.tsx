"use client"
import React, { useState } from 'react'
import axios from 'axios';
import { createClient } from "smtpexpress"
import { toast } from 'react-hot-toast';


type Props = {}

interface FormState {

  fullName: string;
  email: string;
  subject: string;
  message: string;
}
const InitialState = {

  fullName: "",
  email: "",
  subject: "",
  message: ""
}

export const smtpexpressClient = createClient({
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  projectSecret: process.env.NEXT_PUBLIC_PROJECT_SECRET
});
const ContactMe = (props: Props) => {

  const [formData, setFormData] = useState<FormState>(InitialState)
  const [loading, setLoading] = useState<boolean>(false)
  // const [err, setErr]=useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }))
  }
  // console.log(formData)
  // console.log(process.env.NEXT_PUBLIC_PROJECT_SECRET)

  //use Axios to make a POST request

  const api = axios.create({
    baseURL: "https://api.smtpexpress.com/",
    headers: {

      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.PROJECT_SECRET}`
    }
  })
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault()
    setLoading(true)

    if (!formData.message || !formData.fullName) {
      setLoading(false)
      // setErr("field is required")
      return;
    }
    // try {
    //     const body = {

    //         subject: formData.subject,
    //         message: `<h2>${formData.message}</h2> &nbsp; <p>${formData.email}</p>`,
    //         sender: {

    //             name: formData.fullName,
    //             email: "sm0pid-ae8zbl-uvZdQpm2BkrEt4Ca6G@projects.smtpexpress.com",
    //         },
    //         recipients: {
    //             name: "Idighekere Udo",
    //             email: "idighekereudo@gmail.com"
    //         }
    //     }

    //     const response = await api.post("send", body)
    //     console.log(response.data)
    //     setLoading(false)
    // } catch (error) {
    //     console.error("Error sending email", error)
    // }
    var template = `
           <div style="">
           <p style="padding:0px; margin:0;"><strong>Name: </strong>${formData.fullName}</p>
           <p style="padding:0px; margin:0;"><strong>Email: </strong>${formData.email}</p>
           <h3 style="padding:0px; margin:0;">${formData.subject}</h3>
           <br/>
           <p style="text-align:center;padding:0px; margin:0; "><strong>Message</strong></p>
            <p style="padding:0px; margin:0; ">${formData.message}</p>
            </div>
        `
    try {
      // Sending an email using SMTP
      await smtpexpressClient.sendApi.sendMail({
        // Subject of the email
        subject: formData.subject,
        // Body of the email
        message: template,
        // Sender's details
        sender: {
          // Sender's name
          name: "Message from Portfolio",
          // Sender's email address
          email: process.env.NEXT_PUBLIC_SENDER_EMAIL//formData.email,
        },
        // Recipient's details
        recipients: {
          // Recipient's email address (obtained from the form)
          email: "idighekereudo@gmail.com",
        },
      });

      // Notify user of successful submission
      //   alert("Please check your email to view the sent message.");
      toast.success('Email sent')
      setLoading(false);
      setFormData(InitialState)


    } catch (error) {
      // Notify user if an error occurs during submission
      //   alert("Oops! Something went wrong. Please try again later.");
      toast.error(`Submission failed`)
      // You can console.log the error to know what went wrong
      console.log(error);
    } finally {
      setLoading(false);

    }


  }
  return (
    <div className={`px-5 md:px-20`}>
      <div className="flex justify-center mb-5">

        <h2 className="text-4xl font-[600] text-center //mb-6 font-incognito text-soft-white border-b-4 inline-block border-primary-blue ">CONTACT ME</h2>
      </div>

      {/*  What */}
      <form action="" onSubmit={handleSubmit} className="mt-3">
        <div className="flex flex-col gap-3 w-full  md:items-center">
          <input type="text" name="fullName" id="" className="bg-transparent border border-primary-blue/80 rounded-md px-2 py-1 w-full marker:md:w-64 lg:w-96 placeholder:text-soft-white/50" placeholder="Full Name" required value={formData.fullName} onChange={handleChange} />
          < input type="email" name="email" id="" className="bg-transparent border border-primary-blue/80 rounded-md px-2 py-1 w-full marker:md:w-64 lg:w-96 placeholder:text-soft-white/50 focus:text-soft-white/50 focus:border-text-soft-white/50" placeholder="Email Address" required value={formData.email} onChange={handleChange} />
          <input type="text" name="subject" id="" className="bg-transparent border border-primary-blue/80 rounded-md px-2 py-1 w-full marker:md:w-64 lg:w-96 placeholder:text-soft-white/50 focus:text-soft-white/50 focus:border-text-soft-white/50" placeholder="Subject" value={formData.subject} onChange={handleChange} />
          <textarea name="message" id="message" className="bg-transparent border border-primary-blue/80 rounded-md px-2 py-1 w-full md:w-64 lg:w-96 placeholder:text-soft-white/50 focus:text-soft-white/50 focus:border-text-soft-white/50" placeholder="Message" value={formData.message} onChange={handleChange} required></textarea>
          <button className={`border border-primary-blue/80 bg-primary-blue/80 px-3 py-1 text-soft-white w-full md:w-64 rounded-md lg:w-96 duration-200 hover:bg-transparent hover:border text-center ${loading ? "bg-disabled" : ""}`}
            disabled={loading}
          >{loading ? "Loading..." : "Send Message"}</button>

        </div>

        {/* //TODO: */}
      </form >

    </div >
  )
}

export default ContactMe