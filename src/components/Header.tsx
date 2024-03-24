import React from 'react'
import Container from './Container'
import Image from 'next/image'
import Logo from '../assets/images/logo.png'
import { twMerge } from 'tailwind-merge'
import Link from 'next/link'
import { Button } from './Button'

export interface Props {
    navbarClasName?: string;
    navListClassName?: string;
    handleAbout: () => void;
    handlePackage: () => void  
}

const Header = ({navbarClasName, handleAbout, handlePackage} : Props) => {

    const handleClickAbout = () => {
        handleAbout()
    }

    const handleClickPackage = () => {
        handlePackage()
    }

  return (
    
    <header>
        <Container className='flex py-6'>
            <Link className="items-center flex" href="/">
                <h1 className='text-[28px]'>FIT<span className='text-primary'>WITH</span> IMTIAZ</h1>
            </Link>
            <nav className={twMerge('flex ml-auto', navbarClasName)}>
                <div className={twMerge("flex items-center gap-5")}>
                    <Link className="font-medium font-sans cursor-pointer uppercase hover:text-primary" href="/">
                        Home
                    </Link>
                    <button className="font-medium font-sans cursor-pointer uppercase hover:text-primary" onClick={handleClickAbout}>
                        About
                    </button>
                    <button className="font-medium font-sans cursor-pointer uppercase hover:text-primary" onClick={handleClickPackage}>
                        Our Packages
                    </button>
                    <Link className="font-medium font-sans cursor-pointer uppercase hover:text-primary" href="/">
                        Contact Us
                    </Link>                
                </div>
                <Button className='ml-16'>Sign Up</Button>
            </nav>
        </Container>
    </header>
  )
}

export default Header