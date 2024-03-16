import React from 'react'
import { twMerge } from 'tailwind-merge'

interface Props {
    children: React.ReactNode,
    className?: string
}

const Container = ({children, className}: Props) => {
  return (
    <div className={twMerge("max-w-300 w-full m-auto px-3", className)}>{children}</div>
  )
}

export default Container