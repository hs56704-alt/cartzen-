import React from 'react'
import HeaderMenu from './HeaderMenu'
import Logo from './Logo'
import Container from './Container'
import { Button } from './ui/button'
import Image from 'next/image'
import MobileMenu from './MobileMenu'
import { Search } from 'lucide-react'
import CartIcon from './CartIcon'
import SearchBar from './SearchBar'
import { currentUser } from '@clerk/nextjs/server'


const Header = async () => {
  const user = await currentUser();
  console.log("user", user);

  return (
    <header className = "border-b border-b-gray-400 py-5">
        <Container className="flex items-center justify-between gap-7 text-lightColor">
          <MobileMenu />
          <Logo>
           <Image
              src="/logo.png"
              alt="Cartzen Logo"
              width={130}
              height={120}
              priority
              style={{ width: '100px', height: '30px' }}
            />
          </Logo>
          <div className = "w-auto md:w-1/3 flex items-center justify-center gap-1.5">
          
          <HeaderMenu />
          </div>
          <div className="w-auto md:w-1/3 flex items-center justify-end gap-2">
            <SearchBar />
            <CartIcon />
            
          </div>
          <div>
            <button className='text-sm font-semibold hover:text-darkColor hoverEffect'>Log In </button>
          </div>
        </Container>
    </header>
  )
}

export default Header
