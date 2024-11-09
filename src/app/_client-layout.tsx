
"use client"

import {PreLoader} from "@/components/ui/PreLoader";
import React, {useState,useEffect} from "react"

export const ClientLayout =({children}:{children:React.ReactNode})=>{

    const [loading,setLoading] = useState(true)

    useEffect(()=>{
        const timer = setTimeout(() => {
            setLoading(false)
        }, 3000);

        return ()=>clearTimeout(timer)
    },[loading])

    if(loading){
        return (<>
        <PreLoader/>
        </>)
    }
    return(
    <>
    {children}

    </>)
}
