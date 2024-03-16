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
  }

const Header = ({navbarClasName} : Props) => {
  return (
    
    <header>
        <Container className='flex py-6'>
            <Link className="items-center flex" href="/">
                <Image src={Logo} alt='logo' />
            </Link>
            <nav className={twMerge('flex ml-auto', navbarClasName)}>
                <div className={twMerge("flex items-center gap-5")}>
                    <Link className="font-medium font-sans cursor-pointer uppercase" href="/">
                        Home
                    </Link>
                    <Link className="font-medium font-sans cursor-pointer uppercase" href="/">
                        About
                    </Link>
                    <Link className="font-medium font-sans cursor-pointer uppercase" href="/">
                        How It Work
                    </Link>
                    <Link className="font-medium font-sans cursor-pointer uppercase" href="/">
                        Contact Us
                    </Link>                
                </div>
                <Button className='ml-5'>Sign Up</Button>
            </nav>
        </Container>
    </header>
  )
}

export default Header