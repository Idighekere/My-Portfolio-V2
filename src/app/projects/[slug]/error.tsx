"use client"
import React from 'react'

type Props = {
    error: string
}

const ErrorBoundary = (props: Props) => {
    return (
        <div>Error: {props.error}</div>
    )
}

export default ErrorBoundary