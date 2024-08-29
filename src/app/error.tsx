"use client"
import React from 'react'

type Props = {
    error: string
}

const ErrorBoundary = (props: Props) => {
    return (
        <div className="flex h-screen justify-center items-center">

            <div>Error: {props.error}</div>
        </div>
    )
}

export default ErrorBoundary